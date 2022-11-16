import React, { useState, useEffect } from "react";
import { storage, db } from "../firebase";
import { Button, Form, Grid, Loader } from "semantic-ui-react";
import { useParams, useNavigate } from "react-router-dom";
import { getDownloadURL, uploadBytesResumable, ref } from "firebase/storage";
//import { async } from "@firebase/util";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const initialState = {
  name: "",
  description: "",
  price: "",
  category: "",
};

const Mypage = () => {
  const [data, setData] = useState(initialState);
  const { name, description, price, category } = data;
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errors = {};
    if (!name) {
      errors.name = "Name is required";
    }

    if (!description) {
      errors.description = "Description is required";
    }

    if (!price) {
      errors.price = "Price is required";
    }

    if (!category) {
      errors.category = "Category is required";
    }

    return errors;
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();
    let errors = validate();
    if (Object.keys(errors).length) return setErrors(errors);
    setIsSubmit(true);
       await addDoc(collection(db, "products"),{
        ...data,
        timestamp: serverTimestamp()
       });
       navigate("/home"); //navigate to home page

  };

  return (
    <div>
      <Grid
        centered
        verticalAlign="middle"
        columns="3"
        style={{ height: "80vh" }}
      >
        <Grid.Row>
          <Grid.Column textAlign="center">
            <div>
              {isSubmit ? (
                <Loader active inline="centered" size="huge" />
              ) : (
                <>
                  <h2>Add product</h2>
                  <Form onSubmit={handleSubmit}>
                    <Form.Input
                      label="Name"
                      error={errors.name ? { content: errors.name } : null}
                      placeholder="Enter product name"
                      name="name"
                      onChange={handleChange}
                      value={name}
                      autoFocus
                    />
                    <Form.TextArea
                      label="Description"
                      error={
                        errors.description
                          ? { content: errors.description }
                          : null
                      }
                      placeholder="Product Description"
                      name="description"
                      onChange={handleChange}
                      value={description}
                    />
                    <Form.Input
                      label="Price"
                      error={errors.price ? { content: errors.price } : null}
                      placeholder="Product price"
                      name="price"
                      onChange={handleChange}
                      value={price}
                    />
                    <Form.Input
                      label="Category"
                      error={
                        errors.category ? { content: errors.category } : null
                      }
                      placeholder="Product category"
                      name="category"
                      onChange={handleChange}
                      value={category}
                    />
                    <Form.Input
                      label="Upload"
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                    <Button
                      primary
                      type="submit"
                      disabled={progress !== null && progress < 100}
                    >
                      Submit
                    </Button>
                  </Form>
                </>
              )}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
export default Mypage;
