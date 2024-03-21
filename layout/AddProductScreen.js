// import React, { useState } from "react";
// import axios from "axios";

// const AddProductScreen = () => {
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [category, setCategory] = useState("");
//   const [species, setSpecies] = useState("");
//   const [size, setSize] = useState("");
//   const [origin, setOrigin] = useState("");
//   const [status, setStatus] = useState("");
//   const [image, setImage] = useState(null); 

//   const handleAddProduct = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("name", name);
//       formData.append("price", price);
//       formData.append("category", category);
//       formData.append("species", species);
//       formData.append("size", size);
//       formData.append("origin", origin);
//       formData.append("status", status);
//       formData.append("image", image);

//       const response = await axios.post("mongodb://localhost:27017/ASM_ADN103", formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       setName("");
//       setPrice("");
//       setCategory("");
//       setSpecies("");
//       setSize("");
//       setOrigin("");
//       setStatus("");
//       setImage(null);
   
//       alert("Success", "Thêm thành công");
//     } catch (error) {
//       console.error("Thêm thất bại", error);
//       alert("Lỗi");
//     }
//   };

//   // Function to handle file input change
//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   return (
//     <div style={styles.container}>
//       <input
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         style={styles.input}
//         placeholder="Price"
//         value={price}
//         onChange={(e) => setPrice(e.target.value)}
//         type="number"
//       />
//       <input
//         style={styles.input}
//         placeholder="Category"
//         value={category}
//         onChange={(e) => setCategory(e.target.value)}
//       />
//       <input
//         style={styles.input}
//         placeholder="Species"
//         value={species}
//         onChange={(e) => setSpecies(e.target.value)}
//       />
//       <input
//         style={styles.input}
//         placeholder="Size"
//         value={size}
//         onChange={(e) => setSize(e.target.value)}
//       />
//       <input
//         style={styles.input}
//         placeholder="Origin"
//         value={origin}
//         onChange={(e) => setOrigin(e.target.value)}
//       />
//       <input
//         style={styles.input}
//         placeholder="Status"
//         value={status}
//         onChange={(e) => setStatus(e.target.value)}
//       />
//       <label htmlFor="imageInput">Ảnh cây</label>
//       <input
//         type="file"
//         className="form-control-file"
//         id="imageInput"
//         onChange={handleImageChange}
//       />
//       <button onClick={handleAddProduct}>Add Product</button>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     padding: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//     width: "100%",
//   },
// };

// export default AddProductScreen;


