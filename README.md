# first
The first wildfire plugin template.

## Install

You can install this template with [`wf-cli`](https://github.com/wildfire/wf-cli).

```
npm install wf-cli -g
```

Then init a plugin project with `wf-cli` and this template.

```
wf init first wildfire-my-plugin
```

You will then be aksed to provide some information. Here are two most important ones:

- `project name`:

  > Use **lowercase** for `project name`, connect words with `-`, and add prefix `wf-`. E.g., [`wildfire-pinned-comment`](https://github.com/cheng-kang/wildfire-pinned-comment).

- `module name`:

  Module name is what we use to reference a plugin in code. 
  
  > Use **PascalCase** for `module name`, and add prefix `Wf`. E.g., `WfPinnedComment` for [`wildfire-pinned-comment`](https://github.com/cheng-kang/wildfire-pinned-comment).


## After Init

Run the following commands to view **an example**:

```
cd PROJECT_NAME
npm run build
open ./example/firebase.html
```

**OR**

1. make any change to the source code

2. run `npm run build` to re-build your plugin

3. then view your plugin by `open ./example/firebase.html`.

