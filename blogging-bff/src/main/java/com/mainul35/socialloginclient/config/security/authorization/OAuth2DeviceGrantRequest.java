package com.mainul35.socialloginclient.config.security.authorization;

import org.springframework.security.oauth2.client.endpoint.AbstractOAuth2AuthorizationGrantRequest;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.core.AuthorizationGrantType;
import org.springframework.util.Assert;

/**
 * @author Mainul35
 */
public final class OAuth2DeviceGrantRequest extends AbstractOAuth2AuthorizationGrantRequest {

	private final String deviceCode;

	public OAuth2DeviceGrantRequest(ClientRegistration clientRegistration, String deviceCode) {
		super(AuthorizationGrantType.DEVICE_CODE, clientRegistration);
		Assert.hasText(deviceCode, "deviceCode cannot be empty");
		this.deviceCode = deviceCode;
	}

	public String getDeviceCode() {
		return this.deviceCode;
	}

}
