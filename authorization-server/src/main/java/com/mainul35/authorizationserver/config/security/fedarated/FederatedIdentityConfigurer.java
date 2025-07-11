package com.mainul35.authorizationserver.config.security.fedarated;

import com.mainul35.authorizationserver.repository.ClientRepository;
import org.springframework.context.ApplicationContext;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.util.Assert;

import java.util.function.Consumer;

public final class FederatedIdentityConfigurer extends AbstractHttpConfigurer<FederatedIdentityConfigurer, HttpSecurity> {

    private String loginPageUrl = "/auth/login";

    private String authorizationRequestUri;

    private Consumer<OAuth2User> oauth2UserHandler;

    private Consumer<OidcUser> oidcUserHandler;

    /**
     * @param loginPageUrl The URL of the login page, defaults to {@code "/login"}
     * @return This configurer for additional configuration
     */
    public FederatedIdentityConfigurer loginPageUrl(String loginPageUrl) {
        Assert.hasText(loginPageUrl, "loginPageUrl cannot be empty");
        this.loginPageUrl = loginPageUrl;
        return this;
    }

    /**
     * @param authorizationRequestUri The authorization request URI for initiating
     * the login flow with an external IDP, defaults to {@code
     * "/oauth2/authorization/{registrationId}"}
     * @return This configurer for additional configuration
     */
    public FederatedIdentityConfigurer authorizationRequestUri(String authorizationRequestUri) {
        Assert.hasText(authorizationRequestUri, "authorizationRequestUri cannot be empty");
        this.authorizationRequestUri = authorizationRequestUri;
        return this;
    }

    /**
     * @param oauth2UserHandler The {@link Consumer} for performing JIT account provisioning
     * with an OAuth 2.0 IDP
     * @return This configurer for additional configuration
     */
    public FederatedIdentityConfigurer oauth2UserHandler(Consumer<OAuth2User> oauth2UserHandler) {
        Assert.notNull(oauth2UserHandler, "oauth2UserHandler cannot be null");
        this.oauth2UserHandler = oauth2UserHandler;
        return this;
    }

    /**
     * @param oidcUserHandler The {@link Consumer} for performing JIT account provisioning
     * with an OpenID Connect 1.0 IDP
     * @return This configurer for additional configuration
     */
    public FederatedIdentityConfigurer oidcUserHandler(Consumer<OidcUser> oidcUserHandler) {
        Assert.notNull(oidcUserHandler, "oidcUserHandler cannot be null");
        this.oidcUserHandler = oidcUserHandler;
        return this;
    }

    // @formatter:off
    @Override
    public void init(HttpSecurity http) throws Exception {
        ApplicationContext applicationContext = http.getSharedObject(ApplicationContext.class);
        FederatedIdentityAuthenticationEntryPoint authenticationEntryPoint =
                new FederatedIdentityAuthenticationEntryPoint(this.loginPageUrl);
        if (this.authorizationRequestUri != null) {
            authenticationEntryPoint.setAuthorizationRequestUri(this.authorizationRequestUri);
        }

        FederatedIdentityAuthenticationSuccessHandler authenticationSuccessHandler =
                new FederatedIdentityAuthenticationSuccessHandler();
        if (this.oauth2UserHandler != null) {
            authenticationSuccessHandler.setOAuth2UserHandler(this.oauth2UserHandler);
        }
        if (this.oidcUserHandler != null) {
            authenticationSuccessHandler.setOidcUserHandler(this.oidcUserHandler);
        }

        http
                .exceptionHandling(exceptionHandling ->
                        exceptionHandling.authenticationEntryPoint(authenticationEntryPoint)
                )
                .oauth2Login(oauth2Login -> {
                    oauth2Login.successHandler(authenticationSuccessHandler);
                    if (this.authorizationRequestUri != null) {
                        String baseUri = this.authorizationRequestUri.replace("/{registrationId}", "");
                        oauth2Login.authorizationEndpoint(authorizationEndpoint ->
                                authorizationEndpoint.baseUri(baseUri)
                        );
                    }
                });
    }
    // @formatter:on

}
