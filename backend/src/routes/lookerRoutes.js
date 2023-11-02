import express from "express";
// import createSignedUrl from "../server/utils/auth_utils.ts";

const lookerRouter = express.Router();

const authenticatedUser = {
    //The external user ID should be a unique value from your system
    // "target_url": "https://dec1c6a1-9302-4033-8881-4a1ee4fd7c8e.looker.app/embed/dashboards/thelook::business_pulse",
    "external_user_id": "user1",
    "session_length": 3600,
    "force_logout_login": true,
    // The external_group_id is an arbitrary id, usually from an IdP
    // A folder is created for each external_group_id, for embed users to share content
    "external_group_id": "group1",
    "group_ids": [],
    // For available permissions see: https://docs.looker.com/reference/embedding/sso-embed#permissions
    // If the code here is 
    "permissions": [
      // access_data is necessary for every embed user.
      "access_data",
      // see_looks lets user view existing looks
      "see_looks",
      // see_user_dashboards lets users view existing dashboards 
      "see_user_dashboards",
      // explore lets users use the explore experience
      "explore",
      // save_content lets users save content
      // use it with 'explore' to allow the creation of new dashboards
      "save_content",
      // embed_broswe_spaces lets users navigate between folders to save content
      "embed_browse_spaces",
      // see_lookml_dashbaords lets users view existing 'LookML' dashboards
      // LookML dashboards are created by developers and version controlled
      "see_lookml_dashboards",
      // see_drill_overlay lets users drill into data
      "see_drill_overlay",
      // Allows users to open the schedule modal, and send email to non-embed Looker users
      "schedule_look_emails",
      // Allows embed users to schedule emails to themselves or other embed Looker users 
      "schedule_external_look_emails"
    ],
    // Models are mandatory; an emebd user can only see content and data using these models
    "models": ["thelook","thelook_adwords","sfdc_demo","dashboard-match","ga4","gaming"],
    "user_attributes": { "locale": "en" }
  }


lookerRouter.get('/auth', function(req, res) {
    // TO DO: Add your code here to authenticate that the request is from a valid user
    const src = req.query.src;
    const host = 'https://06312405-94aa-4f79-bd40-2fb0f8adcd41.looker.app'
    const secret = process.env.LOOKER_EMBED_SECRET
    const user = authenticatedUser
    // const url = createSignedUrl(src, user, host, secret);
    res.json({ url });
  });

  export default lookerRouter;