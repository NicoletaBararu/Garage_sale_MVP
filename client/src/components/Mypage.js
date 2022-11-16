import { useState, useEffect } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, listAll, getDownloadURL,list } from "firebase/storage";
import { v4 } from "uuid";

function Mypage() {
  const [imageUpload, setImageUpload] = useState(null);
  const [productList, setProductList] = useState([]);
  const imageListAll = ref(storage, "furniture/");
  console.log(imageListAll);

  const uploadImage = () => {
    if (imageUpload === null) return;
    const imageRef = ref(storage, `furniture/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setProductList((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imageListAll).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setProductList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div class = "Mypage">
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadImage}>Upload product</button>
      {productList.map((url) => {
        return <img src={url} />;
      })}
    </div>
  );
}
export default Mypage;
