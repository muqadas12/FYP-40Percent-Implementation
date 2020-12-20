import React from "react";
import caseRecordd from "../../../assets/Images/caseRecordd.jpg"
import "./CaseRecord.css"
import Box from "../../../components/Box"
import FormTwo from "../../../components/FormTwo"
import Button from "../../../components/Button"
import { TablePlain } from "@dccs/react-table-plain";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";

const headings = [
    { id: "Judicial System of Pakistan", name:  "Judicial System of Pakistan", pdf: "Pdf",Uploaddate:"Apr 24,2019" },
  ];
const CaseRecord=(props)=>{
    const columns = [
        {
          dataField: "id",
          text: "Title"
        },
        {
          dataField: "name",
          text: "Document Type"
        },
        {
          dataField: "pdf",
          text: "Download"
        },
        {
            dataField: "Uploaddate",
            text: "Upload date"
          }
      ];
    return(
        <div className="caserecordimg">
        <img className="responsive-image" src={caseRecordd} alt="My logo" />

    <p className="cr">Online CaseRecord:</p>
    <Box/>
    <FormTwo/>
    <Button  label="Search Result" 
    />
    <p className="doc">Following documents are Availiable for your desire case:</p>
    <BootstrapTable keyField="id" data={headings} columns={columns} />

    

    </div>
    )
}
export default CaseRecord;