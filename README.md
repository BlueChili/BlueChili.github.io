# Deploy instructions

The first pre-requisite is having a Gitub repository named after either your Github username to deploy a personal Github page or your organization if an organization github page is going to be deployed.

Personal page:
```
<USERNAME>.github.io
```

Organization page:
```
<ORGANIZATION>.github.io
```

## Step 1
On repo creation data will need to be pushed into it, the second option *…or push an existing repository from the command line* has relevant instructions, the second step:
```
git branch -M main
```
Can be safely skipped.

After this the starter data wll be present in the repository.

## Step 2
On your Github visit the **Settings** tab, select the **Pages** option in the left column.

Now within the Github Pages section scroll down to the **Branch** entry below **Build and deployment** toggle the selector and switch it from *main* to *gh-pages* this will trigger a new deploy that will take abotu a minute to complete.

Afterwards you will be able to use the link on top nest to **your site is live at** to visit the site's live deployment.
