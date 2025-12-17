import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function StudentDataGrid() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/students")
            .then((res) => res.json())
            .then((data) => setStudents(data));
    }, []);

    const navigate = useNavigate();

    const goToAddPage = () => {
        navigate("/add-student");
    };


    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "name", headerName: "Name", width: 150 },
        { field: "email", headerName: "Email", width: 200 },
        { field: "course", headerName: "Course", width: 150 },
        { field: "age", headerName: "Age", width: 100 },
        {
            field: "actions",
            headerName: "Actions",
            width: 380,
            renderCell: (params) => (
                <>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ marginRight: 8 }}
                        onClick={() => handleEdit(params.row)}
                    >
                        Edit
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{ marginRight: 8 }}

                        onClick={() => handleDelete(params.row.id)}
                    >
                        Delete
                    </Button>


                </>
            ),
        },
    ];

    const handleEdit = (student) => {
        console.log("Edit student:", student);
        // Later: open a modal/form to edit
    };

    const handleDelete = (id) => {
        fetch(`http://localhost:8080/students/${id}`, { method: "DELETE" })
            .then(() => setStudents(students.filter((s) => s.id !== id)));
    };

    return (
        <div style={{ height: 400, width: "100%" }}>
            <DataGrid rows={students} columns={columns} pageSize={5} sx={{mt:4,ml:4,mr:30}}/>
            <Button
                variant="contained"
                color="success"
                onClick={goToAddPage}
                sx={{ml:55,mt:2}}
            >
                Add Student
            </Button>

        </div>
    );
}
