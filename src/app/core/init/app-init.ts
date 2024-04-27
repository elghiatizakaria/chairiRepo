import {ConfigService} from "../config/config.service";
import {KeycloakService} from "keycloak-angular";

export function initializer(keycloak: KeycloakService,configService: ConfigService): () => Promise<any> {
  return (): Promise<void> => {
    return new Promise(async (resolve, reject) => {
      try {
        await configService.init();
        const conf = configService.config;
        await keycloak.init({
          config: {
            url: conf.KEYCLOAK_URI,
            realm: conf.REALM,
            clientId: conf.CLIENT_ID,


          },

          initOptions: {
            onLoad: 'login-required',
            checkLoginIframe: true
          },
          bearerPrefix: 'Bearer',
          bearerExcludedUrls: [],
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };
}
