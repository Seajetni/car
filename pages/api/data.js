import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "cardata",
});

export default async function handler(req, res) {
  let connection;
  try {
    connection = await pool.getConnection();

    if (req.method === "GET") {
      const { id } = req.query;
      try {
        if (id) {
          const [carlabelRows] = await connection.query(
            "SELECT * FROM carlabel WHERE id = ?",
            [id]
          );
          if (carlabelRows.length === 0) {
            try {
              const [Row] = await connection.query(
                "SELECT * FROM info WHERE id = ? ",
                [id]
              );

              if (Row.length === 0) {
                return res.status(404).json({ message: "No data found." });
              }

              const infoIds = Row.map((row) => row.id);

              // Fetch all associated gallery rows
              const [galleryRows] = await connection.query(
                "SELECT * FROM imgGallery WHERE info_id IN (?)",
                [infoIds]
              );

              const galleriesMap = {};

              // Group gallery rows by image id
              galleryRows.forEach((row) => {
                if (!galleriesMap[row.info_id]) {
                  galleriesMap[row.info_id] = [];
                }
                galleriesMap[row.info_id].push(row);
              });

              // Assign galleries to respective images
              const info = Row.map((info) => {
                info.gallery = galleriesMap[info.id] || [];
                return info;
              });

              res.status(200).json(info);
            } catch (error) {
              console.error("Error fetching data:", error);
              res.status(500).json({ message: "Internal server error" });
            }
            return;
          }

          const carlabel = carlabelRows[0];
          const [infoRows] = await connection.query(
            "SELECT * FROM info WHERE carlabel_id = ?",
            [id]
          );
          const infos = [];

          for (const info of infoRows) {
            const [galleryRows] = await connection.query(
              "SELECT * FROM imgGallery WHERE info_id = ?",
              [info.id]
            );
            const gallery = galleryRows;

            info.gallery = gallery;
            infos.push(info);
          }

          carlabel.infos = infos;
          console.log(infos);
          res.status(200).json(carlabel);
        } else {
          const [carlabelRows] = await connection.query(
            "SELECT * FROM carlabel"
          );
          const carlabels = [];

          for (const carlabel of carlabelRows) {
            const [infoRows] = await connection.query(
              "SELECT * FROM info WHERE carlabel_id = ?",
              [carlabel.id]
            );
            const infos = [];

            for (const info of infoRows) {
              const [galleryRows] = await connection.query(
                "SELECT * FROM imgGallery WHERE info_id = ?",
                [info.id]
              );
              const gallery = galleryRows;

              info.gallery = gallery;
              infos.push(info);
            }

            carlabel.infos = infos;
            carlabels.push(carlabel);
          }

          res.status(200).json(carlabels);
        }
      } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error." });
      }
    } else if (req.method === "POST") {
      const { carlabelId, carData, galleryData } = req.body;

      // Input validation
      if (
        !carlabelId ||
        !carData ||
        !galleryData ||
        !Array.isArray(galleryData)
      ) {
        return res.status(400).json({ message: "Invalid request body" });
      }

      const { title, price, name, door, energy, carclass, details } = carData;
      if (
        !title ||
        !price ||
        !name ||
        !door ||
        !energy ||
        !carclass ||
        !details
      ) {
        return res
          .status(400)
          .json({ message: "Missing required fields in carData" });
      }

      const isValidGalleryData = galleryData.every(
        (item) => typeof item === "string"
      );
      if (!isValidGalleryData) {
        return res.status(400).json({ message: "Invalid galleryData format" });
      }

      // Begin transaction
      await connection.beginTransaction();

      try {
        // Insert car information
        const [carResult] = await connection.query(
          "INSERT INTO info (carlabel_id, title, price, name, door, energy, carclass, details) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
          [carlabelId, title, price, name, door, energy, carclass, details]
        );
        const infoId = carResult.insertId;

        // Insert gallery data
        await Promise.all(
          galleryData.map(async (galleryItem) => {
            await connection.query(
              "INSERT INTO imgGallery (info_id, carlabel_id, img) VALUES (?, ?, ?)",
              [infoId, carlabelId, galleryItem]
            );
          })
        );

        // Commit transaction
        await connection.commit();
        return res
          .status(201)
          .json({ message: "Car information and gallery added successfully" });
      } catch (error) {
        console.error("Error adding car information and gallery:", error);
        // Rollback transaction on error
        await connection.rollback();
        return res
          .status(500)
          .json({ message: "Failed to add car information and gallery" });
      }
    } else if (req.method === "PUT") {
      // Update
      const { id } = req.query;
      const { name, where1, area, status, imageLink, carlabel_id } = req.body; // Destructure all required fields from req.body

      // Check if any field is provided for update
      if (name || where1 || area || status || imageLink || carlabel_id) {
        await connection.query(
          "UPDATE images SET name = ?, where1 = ?, area = ?, status = ?, imageLink = ?, carlabel_id = ? WHERE id = ?",
          [name, where1, area, status, imageLink, carlabel_id, id]
        );
        res.status(201).send("User added successfully");
      } else {
        // No fields provided for update
        console.log("No fields provided for update");
        res.status(400).send("No fields provided for update");
      }
    } else if (req.method === "DELETE") {
      // Handle DELETE request
      const { imageId } = req.body;

      await connection.beginTransaction();

      // Delete associated rows in the imgGallery table first
      await connection.query("DELETE FROM imgGallery WHERE images_id = ?", [
        imageId,
      ]);

      // Then delete the row from the images table
      await connection.query("DELETE FROM images WHERE id = ?", [imageId]);

      await connection.commit();
      res
        .status(200)
        .json({ message: "Image and associated gallery deleted successfully" });
    }
  } finally {
    if (connection) {
      connection.release();
    }
  }
}
