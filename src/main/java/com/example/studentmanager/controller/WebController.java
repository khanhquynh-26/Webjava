package com.example.studentmanager.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {

    // Phần B: Trang web cơ bản
    @GetMapping("/students")
    public String showBasicPage() {
        return "students"; // Tìm file templates/students.html
    }

    // Phần C: Trang AdminLTE 4
    @GetMapping("/admin/students")
    public String showAdminPage() {
        return "admin_students"; // Tìm file templates/admin_students.html
    }
}