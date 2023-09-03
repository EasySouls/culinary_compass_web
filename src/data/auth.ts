import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import type { NextAuthOptions as NextAuthConfig } from "next-auth";
import { getServerSession } from "next-auth";

import Apple from "next-auth/providers/apple";
import Atlassian from "next-auth/providers/atlassian";
import Auth0 from "next-auth/providers/auth0";
import Authentik from "next-auth/providers/authentik";
import AzureAD from "next-auth/providers/azure-ad";
import AzureB2C from "next-auth/providers/azure-ad-b2c";
import Battlenet from "next-auth/providers/battlenet";
import Box from "next-auth/providers/box";
import BoxyHQSAML from "next-auth/providers/boxyhq-saml";
import Bungie from "next-auth/providers/bungie";
import Cognito from "next-auth/providers/cognito";
import Coinbase from "next-auth/providers/coinbase";
import Discord from "next-auth/providers/discord";
import Dropbox from "next-auth/providers/dropbox";
import DuendeIDS6 from "next-auth/providers/duende-identity-server6";
import Eveonline from "next-auth/providers/eveonline";
import Facebook from "next-auth/providers/facebook";
import Faceit from "next-auth/providers/faceit";
import FortyTwoSchool from "next-auth/providers/42-school";
import Foursquare from "next-auth/providers/foursquare";
import Freshbooks from "next-auth/providers/freshbooks";
import Fusionauth from "next-auth/providers/fusionauth";
import GitHub from "next-auth/providers/github";
import Gitlab from "next-auth/providers/gitlab";
import Google from "next-auth/providers/google";
import Hubspot from "next-auth/providers/hubspot";
import Instagram from "next-auth/providers/instagram";
import Kakao from "next-auth/providers/kakao";
import Keycloak from "next-auth/providers/keycloak";
import Line from "next-auth/providers/line";
import LinkedIn from "next-auth/providers/linkedin";
import Mailchimp from "next-auth/providers/mailchimp";
import Mailru from "next-auth/providers/mailru";
import Medium from "next-auth/providers/medium";
import Naver from "next-auth/providers/naver";
import Netlify from "next-auth/providers/netlify";
import Okta from "next-auth/providers/okta";
import Onelogin from "next-auth/providers/onelogin";
import Osso from "next-auth/providers/osso";
import Osu from "next-auth/providers/osu";
import Passage from "next-auth/providers/passage";
import Patreon from "next-auth/providers/patreon";
import Pinterest from "next-auth/providers/pinterest";
import Pipedrive from "next-auth/providers/pipedrive";
import Reddit from "next-auth/providers/reddit";
import Salesforce from "next-auth/providers/salesforce";
import Slack from "next-auth/providers/slack";
import Spotify from "next-auth/providers/spotify";
import Strava from "next-auth/providers/strava";
import Todoist from "next-auth/providers/todoist";
import Trakt from "next-auth/providers/trakt";
import Twitch from "next-auth/providers/twitch";
import Twitter from "next-auth/providers/twitter";
import UnitedEffects from "next-auth/providers/united-effects";
import Vk from "next-auth/providers/vk";
import Wikimedia from "next-auth/providers/wikimedia";
import Wordpress from "next-auth/providers/wordpress";
import WorkOS from "next-auth/providers/workos";
import Yandex from "next-auth/providers/yandex";
import Zitadel from "next-auth/providers/zitadel";
import Zoho from "next-auth/providers/zoho";
import Zoom from "next-auth/providers/zoom";

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation
declare module "next-auth/jwt" {
  interface JWT {
    /** The user's role. */
    userRole?: "admin";
  }
}

export const config = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    Apple({
      clientId: process.env.AUTH_APPLE_ID,
      clientSecret: process.env.AUTH_APPLE_SECRET,
    }),
    Auth0({
      clientId: process.env.AUTH_AUTH0_ID,
      clientSecret: process.env.AUTH_AUTH0_SECRET,
      issuer: process.env.AUTH_AUTH0_ISSUER,
    }),
    Discord({
      clientId: process.env.AUTH_DISCORD_ID,
      clientSecret: process.env.AUTH_DISCORD_SECRET,
    }),
    Facebook({
      clientId: process.env.AUTH_FACEBOOK_ID,
      clientSecret: process.env.AUTH_FACEBOOK_SECRET,
    }),
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Instagram({
      clientId: process.env.AUTH_INSTAGRAM_ID,
      clientSecret: process.env.AUTH_INSTAGRAM_SECRET,
    }),
    Patreon({
      clientId: process.env.AUTH_PATREON_ID,
      clientSecret: process.env.AUTH_PATREON_SECRET,
    }),
    Pinterest({
      clientId: process.env.AUTH_PINTEREST_ID,
      clientSecret: process.env.AUTH_PINTEREST_SECRET,
    }),
    Reddit({
      clientId: process.env.AUTH_REDDIT_ID,
      clientSecret: process.env.AUTH_REDDIT_SECRET,
    }),
    Spotify({
      clientId: process.env.AUTH_SPOTIFY_ID,
      clientSecret: process.env.AUTH_SPOTIFY_SECRET,
    }),
    Twitch({
      clientId: process.env.AUTH_TWITCH_ID,
      clientSecret: process.env.AUTH_TWITCH_SECRET,
    }),
    Twitter({
      clientId: process.env.AUTH_TWITTER_ID,
      clientSecret: process.env.AUTH_TWITTER_SECRET,
      version: "2.0",
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin";
      return token;
    },
  },
} satisfies NextAuthConfig;

// Helper function to get session without passing config every time
// https://next-auth.js.org/configuration/nextjs#getserversession
export function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, config);
}

// We recommend doing your own environment variable validation
declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      NEXTAUTH_SECRET: string;

      AUTH_APPLE_ID: string;
      AUTH_APPLE_SECRET: string;
      AUTH_AUTH0_ID: string;
      AUTH_AUTH0_ISSUER: string;
      AUTH_AUTH0_SECRET: string;
      AUTH_DISCORD_ID: string;
      AUTH_DISCORD_SECRET: string;
      AUTH_FACEBOOK_ID: string;
      AUTH_FACEBOOK_SECRET: string;
      AUTH_GITHUB_ID: string;
      AUTH_GITHUB_SECRET: string;
      AUTH_GOOGLE_ID: string;
      AUTH_GOOGLE_SECRET: string;
      AUTH_INSTAGRAM_ID: string;
      AUTH_INSTAGRAM_SECRET: string;
      AUTH_PINTEREST_ID: string;
      AUTH_PINTEREST_SECRET: string;
      AUTH_PATREON_ID: string;
      AUTH_PATREON_SECRET: string;
      AUTH_REDDIT_ID: string;
      AUTH_REDDIT_SECRET: string;
      AUTH_SPOTIFY_ID: string;
      AUTH_SPOTIFY_SECRET: string;
      AUTH_TWITCH_ID: string;
      AUTH_TWITCH_SECRET: string;
      AUTH_TWITTER_ID: string;
      AUTH_TWITTER_SECRET: string;
    }
  }
}
