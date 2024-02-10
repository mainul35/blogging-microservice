package com.mainul35.articleservice.controllers;

import com.mainul35.articleservice.dto.MessageDto;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestController {

    @GetMapping("/user")
    @PreAuthorize("hasAnyAuthority('ROLE_USER', 'OIDC_USER')")
    public ResponseEntity<MessageDto> userData (Authentication authentication) {
        return ResponseEntity.ok(new MessageDto("Hello, " + authentication.getName()));
    }

    @GetMapping("/admin")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<MessageDto> adminData (Authentication authentication) {
        return ResponseEntity.ok(new MessageDto("Hello, " + authentication.getName()));
    }
}
