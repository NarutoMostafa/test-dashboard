/* eslint-disable no-inline-comments */

module.exports = {
    port: 3000, // Pport to listen on
    prefix: "!", // Prefix for commands
    id: "1268264734596010145", // Discord Bot ID
    usingCustomDomain: false, // Use a custom domain for the bot
    domain: "http://localhost:3000", // Custom domain
    discordInvite: "https://discord.com/oauth2/authorize?client_id=1268264734596010145&permissions=8&integration_type=0&scope=bot+applications.commands", // Discord Invite URL
    mongodbUrl: "mongodb+srv://c4clan1:c4clan1@c4clan.ohxsoxt.mongodb.net/?retryWrites=true&w=majority", // MongoDB connection URL
    clientSecret: "wYf7DQGevYT_QPTssMhPsLfKjX23dXLX", // Client Secret from Discord Application
    token: "MTI3Mjc3NTk0NzMzODM4MzM5MA.G4GlSy.OibFDJ2j3UFXWTIeSP4rDI9fet8AJ6mfCBxzxs", // Bot Token from Discord Application
  };
  
  /**
   * !!!
   * You need to add a redirect url to https://discordapp.com/developers/applications/ID/oauth2.
   * Format is: domain:port/callback example http://localhost:8080/callback
   * - Do not include port if the port is 80.
   * !!!
   */
  