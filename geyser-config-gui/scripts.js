function generateConfig() {
    const config = {
        bedrock: {
            port: document.getElementById('bedrock-port').value,
            clone_remote_port: document.getElementById('clone-remote-port').value === 'true',
            motd1: document.getElementById('motd1').value,
            motd2: document.getElementById('motd2').value,
            server_name: document.getElementById('server-name').value,
            compression_level: document.getElementById('compression-level').value,
            enable_proxy_protocol: document.getElementById('enable-proxy-protocol').value === 'true',
            proxy_protocol_whitelisted_ips: document.getElementById('proxy-protocol-whitelisted-ips').value
        },
        remote: {
            address: document.getElementById('remote-address').value,
            port: document.getElementById('remote-port').value,
            auth_type: document.getElementById('auth-type').value,
            allow_password_authentication: document.getElementById('allow-password-authentication').value === 'true',
            use_proxy_protocol: document.getElementById('use-proxy-protocol').value === 'true',
            forward_hostname: document.getElementById('forward-hostname').value === 'true'
        },
        floodgate: {
            key_file: document.getElementById('floodgate-key-file').value
        },
        miscellaneous: {
            command_suggestions: document.getElementById('command-suggestions').value === 'true',
            passthrough_motd: document.getElementById('passthrough-motd').value === 'true',
            passthrough_player_counts: document.getElementById('passthrough-player-counts').value === 'true',
            legacy_ping_passthrough: document.getElementById('legacy-ping-passthrough').value === 'true',
            ping_passthrough_interval: document.getElementById('ping-passthrough-interval').value,
            forward_player_ping: document.getElementById('forward-player-ping').value === 'true',
            max_players: document.getElementById('max-players').value,
            debug_mode: document.getElementById('debug-mode').value === 'true',
            show_cooldown: document.getElementById('show-cooldown').value,
            show_coordinates: document.getElementById('show-coordinates').value === 'true',
            disable_bedrock_scaffolding: document.getElementById('disable-bedrock-scaffolding').value === 'true',
            emote_offhand_workaround: document.getElementById('emote-offhand-workaround').value,
            cache_images: document.getElementById('cache-images').value,
            allow_third_party_capes: document.getElementById('allow-third-party-capes').value === 'true',
            allow_third_party_ears: document.getElementById('allow-third-party-ears').value === 'true',
            default_locale: document.getElementById('default-locale').value,
            floodgate: document.getElementById('floodgate').value,
            ping_passthrough: document.getElementById('ping-passthrough').value === 'true'
        }
    };

    const configYaml = `bedrock:
  port: ${config.bedrock.port}
  clone-remote-port: ${config.bedrock.clone_remote_port}
  motd1: "${config.bedrock.motd1}"
  motd2: "${config.bedrock.motd2}"
  server-name: "${config.bedrock.server_name}"
  compression-level: ${config.bedrock.compression_level}
  enable-proxy-protocol: ${config.bedrock.enable_proxy_protocol}
  proxy-protocol-whitelisted-ips: "${config.bedrock.proxy_protocol_whitelisted_ips}"
remote:
  address: "${config.remote.address}"
  port: ${config.remote.port}
  auth-type: "${config.remote.auth_type}"
  allow-password-authentication: ${config.remote.allow_password_authentication}
  use-proxy-protocol: ${config.remote.use_proxy_protocol}
  forward-hostname: ${config.remote.forward_hostname}
floodgate:
  key-file: "${config.floodgate.key_file}"
miscellaneous:
  command-suggestions: ${config.miscellaneous.command_suggestions}
  passthrough-motd: ${config.miscellaneous.passthrough_motd}
  passthrough-player-counts: ${config.miscellaneous.passthrough_player_counts}
  legacy-ping-passthrough: ${config.miscellaneous.legacy_ping_passthrough}
  ping-passthrough-interval: ${config.miscellaneous.ping_passthrough_interval}
  forward-player-ping: ${config.miscellaneous.forward_player_ping}
  max-players: ${config.miscellaneous.max_players}
  debug-mode: ${config.miscellaneous.debug_mode}
  show-cooldown: ${config.miscellaneous.show_cooldown}
  show-coordinates: ${config.miscellaneous.show_coordinates}
  disable-bedrock-scaffolding: ${config.miscellaneous.disable_bedrock_scaffolding}
  emote-offhand-workaround: "${config.miscellaneous.emote_offhand_workaround}"
  cache-images: ${config.miscellaneous.cache_images}
  allow-third-party-capes: ${config.miscellaneous.allow_third_party_capes}
  allow-third-party-ears: ${config.miscellaneous.allow_third_party_ears}
  default-locale: "${config.miscellaneous.default_locale}"
  floodgate: "${config.miscellaneous.floodgate}"
  ping-passthrough: ${config.miscellaneous.ping_passthrough}`;

    document.getElementById('config-output').value = configYaml;
}
