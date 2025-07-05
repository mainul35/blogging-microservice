package com.mainul35.socialloginclient.controllers;

import com.mainul35.socialloginclient.dto.MessageDto;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class ResourceController {

    @GetMapping("/user")
    @PreAuthorize("hasAnyAuthority('ROLE_USER', 'OIDC_USER')")
    public ResponseEntity<MessageDto> user (Authentication authentication) {
        return ResponseEntity.ok(new MessageDto("Success from user endpoint"));
    }

    @GetMapping("/admin")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'OIDC_USER')")
    public ResponseEntity<MessageDto> admin (Authentication authentication) {
        return ResponseEntity.ok(new MessageDto("Success from admin endpoint"));
    }
}
