import envConfig from "../configs/env.config";

export const getMediaUrl = (key: string) => {
    return `${envConfig.app.mediaPrefix}/${key}`;
};
