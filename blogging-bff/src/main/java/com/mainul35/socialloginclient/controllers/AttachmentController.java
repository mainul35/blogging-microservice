package com.mainul35.socialloginclient.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin("http://localhost:5174/")
@RequestMapping("/api/v1")
public class AttachmentController {

    @PostMapping("/attachments-upload")
    @PreAuthorize("hasAnyAuthority('ROLE_USER', 'OIDC_USER')")
    public ResponseEntity<String> saveAttachmentAndReturnUrl (@RequestParam(value="file") MultipartFile file, @RequestParam(value="articleTempId") String articleTempId) {
        System.out.println(articleTempId);
        return ResponseEntity.ok("");
    }
}
