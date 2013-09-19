# Development Process

* Get your tasks (stories) from Pivotal Tracker. In some cases, the tasks will be on drupal.org (with links given in the matching story).
* When you start working on a story, click the "Start" button. Do not start more than one task at once unless they will both be solved at once.
* Bug fixes or feature additions to contributed modules should follow the process outlined on the [Advanced patch contributor guide](http://drupal.org/node/1054616) documentation page.
* Development on custom themes or modules should be committed to the specific Git repo for each.
* When making a commit to a custom repo, use phrases like "Working on [#p-tracker-id] - P Tracker Story Title".
* If you don't do the above, manually attach links to changesets in each story.
* When you are satisfied the code to complete a task is contained in a patch uploaded to a drupal issue (or committed to a custom repository), click the "Finish" button in Pivotal Tracker.
* Create a new platform on the Aegir Octopus instance that is hosting the site.
* Clone the live site to dev.siteurl.com. Use the same tld as the live site.
* Migrate the dev site to the platform you've just created.
* If someone else is working on the dev site already, you can use a url like dev.shortname.siteurl.com
* Once you have the dev site working on the new platform without any issues, click the "Deliver" button.
* When your story is accepted, the dev site should be deleted.
* Always delete the dev site after it's done being used.

## Confirming a Story

* View the status of the story in Pivotal Tracker.
* Check to make sure the story has a github change commit.
* Confirm that creating a new platform and migrating to the new platform maintains changes.
* Verify that alterations to Drupal Views (or anything else that can be saved) was saved to a module or feature.
* View commit attached to the story, and confirm it contains code pertaining to the story.


Note:

- dev.live has the same error reporting that dev does. The production url does not have error reporting turned on. So notices and warnings will show up on dev.live, but not on production.

## Updates

* During the first round of updates to a site when making the drush make file create repositories for each hacked module. Download the module using git within the make file.


converted to Markdown from sundaysenergy.org

## General

*   cPanel access is the same as FTP. Â Username and password information is found on the website project page.
    *   phpMyAdmin is found in the cpanel area
    *   Links to cpanel, whm, and webmail can be found on the individual server pages.
    *   cpanel is usually http://domain.com/cpanel
*   The development server is almost always k11 or k10. Â You can see a list of servers and IP information on the server info page.
*   All development is for Drupal 5 unless otherwise noted.Â
*   Track hours each day using a comment on the task. Â Please note the things you did on the task that day.
*   Check to make sure you have access to all required areas. Â If you do not have access leave a comment on the task requesting login and password access to the specific area you need.
*   Keep your jabber ID up to date. Â If you do not have a jabber ID ask for one and it will be created for you. Â Jabber ID is entered in your user edit areaÂ /user/uid/edit/jabber
*   Modules and themes should be uploaded into the public\_html/sites/all/ directory NOT the public\_html/ directory.

## Themes

*   Themes need to be developed using the zengine theme engine and start from the zenzen theme that is pre-installed on the development site.
*   Themes need to be developed on our development servers.
*   Browser compatibility needs to be checked for IE7, Mozilla Firefox 3, and Safari 3.
*   Also check compatibility in IE6 and Camino if it has been requested.
*   icons.css - Any button, list, or menu goes in the icons.css file.

## Modules

*   DO NOT hack or modify Drupal or Ubercart core
*   Edit the module provided for you in the description of the task.
*   When using a user name on drupal sites please use your sundaysenergy.com email address. Â If you do not have one ask for one.
*   Patches should be created and attached to the task.
*   ubercart add-on modules are always in the ubercart contrib directory.Â
    *   /public\_html/sites/all/modules/ubercart/contrib/uc\_subscribe/uc_subscribe.module

## Assigning Tasks

*   Make sure the website has updated ftp login information and that the person the task is assigned to has a drupal user account withÂ appropriateÂ permissions.
*   Make sure ALL the issues of anything that is wrong is recorded in the task description or as a comment on the task on the website!
