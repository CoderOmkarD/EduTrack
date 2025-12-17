package com.backendx.backend.Controller;

import com.backendx.backend.Entity.StudentEntity;
import com.backendx.backend.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
@CrossOrigin("*")
public class StudentController {

    @Autowired
    private StudentService service;

    @GetMapping
    public List<StudentEntity> getAll() {

        return service.getAllStudents();
    }

    @PostMapping
    public StudentEntity add(@RequestBody StudentEntity student) {

        return service.addStudent(student);
    }

    @PutMapping
    public StudentEntity update(@RequestBody StudentEntity student) {

        return service.updateStudent(student);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id) {
        service.deleteStudent(id);
        return "Deleted successfully";
    }
}
