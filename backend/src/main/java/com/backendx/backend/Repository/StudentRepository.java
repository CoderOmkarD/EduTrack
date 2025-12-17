package com.backendx.backend.Repository;

import com.backendx.backend.Entity.StudentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository <StudentEntity, Integer> {
}
