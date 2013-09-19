# BOA Resources

## Updating Server
    $ barracuda up-stable

## Fresh Server Install
    $ boa in-stable public boa3.sundaysenergy.net admin@sundaysenergy.com b3share mini

## Octopus Install
    $ boa in-stable public sdeskbots.sundaysenergy.net info@sundaysenergy.com sdeskbots mini

## Getting Password
    $ grep pass: /data/disk/sdeskbots/log/setupmail.txt

## Create public ssh key
    $ ssh-keygen -b 4096 -t rsa -N "" -f ~/.ssh/id_rsa
    $ cat ~/.ssh/id_rsa.pub

$ git clone….

75.72.212.192

Delete An Account

You should use Aegir interface to delete all sites and then platforms. Then you can delete manually Octopus hostmaster database, home directory and associated users. We don't have any kind of clean-up script yet.

deluser --remove-home username



o1.ftp and o1



[links](http://groups.drupal.org/node/163489)
[wiki](http://groups.drupal.org/node/163784)



/etc/csf/csf.conf

    #Allow outgoing TCP ports TCP_OUT = "20,21,22,25,53,80,110,143,443,465,587,873,993,995,1167,2401,5280,9418,30000:50000"

/etc/init.d/csf restart




  1. Use another IP to connect to the server.
  2. Login to your server.
  3. As privileged user (root) run csf -a 75.149.156.237

