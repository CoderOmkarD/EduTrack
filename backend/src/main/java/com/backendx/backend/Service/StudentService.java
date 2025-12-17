package com.backendx.backend.Service;

import com.backendx.backend.Entity.StudentEntity;
import com.backendx.backend.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repo;

    public List<StudentEntity> getAllStudents() {
        return repo.findAll();
    }

    public StudentEntity addStudent(StudentEntity student) {
        return repo.save(student);
    }

    public StudentEntity updateStudent(StudentEntity student) {
        return repo.save(student);
    }

    public void deleteStudent(int id) {
        repo.deleteById(id);
    }
}
