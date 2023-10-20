import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

export default function Home() {
  const [data, setData] = useState();
  const [ext,setExt]= useState("csv")
  const [fileName,setFileName] = useState()
  useEffect(() => {
    axios.get(`http://localhost:3000/file/list`).then((res) => {
      const files = res.data;
      setData(files.data);
      console.log(data);
    });
  }, [data]);
  const deleteFile = (file) => {
    axios.delete(`http://localhost:3000/file/delete/${file}`).then((res) => {
        const files = res.data;
        console.log(files);
        setData(oldata=>oldata.filter(item =>item !== file))
      });  
    };
  const telecharger = (file)=>{
    var [fileName] = file.split(".");    
    axios.get(`http://localhost:3000/file/download/${file}`,{responseType: 'blob'}).then((res) => {
        const files = res.data;
        const href = window.URL.createObjectURL(res.data);
        const anchorElement = document.createElement('a');

      anchorElement.href = href;
      anchorElement.download = fileName;

      document.body.appendChild(anchorElement);
      anchorElement.click();

      document.body.removeChild(anchorElement);
      window.URL.revokeObjectURL(href);
        console.log(files);
      });
  }
  const handleChange = (event)=>{
     setExt(event.target.value)
     console.log(ext)
  }

  const addfile= ()=>{
   axios.get(`http://localhost:3000/file/create/${fileName}/${ext}`).then((res) => {
        const files = res.data;
        setData(oldata=>[...oldata,files.data])
        document.getElementById("fileName").value = "";
      });
  }
  return (
    <>
    <section>
      <Table>
        <tbody>
            {
            data?.map((files) => (
            <>
              <tr key={files}>
              <td>{files}</td>))
          <td><button
                onClick={() => {
                    deleteFile(files)
                }}
              >
                {" "}
                delete
              </button></td>
              <td><button
                onClick={() => {
                    telecharger(files)
                }}
              >
                {" "}
                 telecharger
              </button></td>
          </tr>
            </>
          ))}
        </tbody>
      </Table>
      </section>
      <section>
        <dev>
        <label for="fileName" >file Name </label>
        <input type="text" id="fileName" onChange={ (e) => setFileName(e.target.value)} />
        </dev>
        <dev>
            <select value={ext} onChange={handleChange}>
                <option value="csv" selected>csv</option>
                <option value="xml">xml</option>
                <option value="excel">excel</option>
            </select>
        </dev>
        <button onClick={addfile}>Add new </button>
      </section>
    </>
  );
}
