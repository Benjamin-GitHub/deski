import React from "react";
import Helmet from "react-helmet";
import Info from "../settings/Info.json";
import Settings from "../settings/settings.json";

export const HelmetMeta = () => {
    return (
        <Helmet>
            <meta name="theme-color" content={Settings.colors.primary} />
            <title>{Info.basics.name} | {Info.basics.location.city}, {Info.basics.location.country}</title>
            <meta name="author" content={Info.basics.name} />
            <meta name="description" content={Info.basics.description} />
            <meta name="keywords" content={Info.basics.keywords} />
        </Helmet>
    );
};
