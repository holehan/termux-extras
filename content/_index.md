---
title: 'an APT repository for Hugo and sift'
date: 2018-07-23T16:28:45+02:00
type: index
description: 'Termux extra packages including Hugo and sift. Run Hugo on Android and impress your friends.'
---

### About

This apt repository contains extra packages for [Termux](https://termux.com/), an Android terminal emulator and Linux environment app.

#### Current packages

- [Sift](https://sift-tool.org) 0.9.0, a fast and powerful alternative to grep ([Github](https://github.com/svent/sift/)).

#### Former packages

The following packages have been removed from the repository. This usually happens once they can be found in the official termux packages repository.

- [Hugo](https://gohugo.io/) v0.53/extended, a fast and flexible Static Site Generator written in Go ([Github](https://github.com/gohugoio/hugo)). _Hugo is now part of the official termux packages repository_! 🎉

### Requirements

Make sure you have installed all required packages to get access to the apt repository, namely `curl` to download the signing key and `gnupg` to import it:

```bash
pkg install curl gnupg
```

### Add extras repository to Termux

Access the repo by adding a file named `holehan.list` to `$PREFIX/etc/apt/sources.list.d` containing the single line
`deb https://termux.holehan.org/ termux extras`. Then import the GPG key the repository was signed with. Just follow the steps below:

```bash
mkdir -p $PREFIX/etc/apt/sources.list.d
echo "deb https://termux.holehan.org/ termux extras" \
> $PREFIX/etc/apt/sources.list.d/holehan.list
curl https://termux.holehan.org/holehan.key -o holehan.key
apt-key add holehan.key
rm holehan.key # Delete the key after import
```

### Installing packages

#### Hugo

The Hugo package comes with bash-completion support and man pages. So you may want to install these packages as well:

```bash
pkg install bash-completion man hugo
```

Notes:

- You won't be able to use the `hugo` bash-completion until you start a new Termux session.
- If you want to use [Hugo Pipes with postcss](http://gohugo.io/hugo-pipes/postcss/), you'll have to adapt the postcss-cli [shebang to Termux's private space](https://wiki.termux.com/wiki/Termux-fix-shebang) first. Repeat this step on each postcss update:

```bash
termux-fix-shebang node_modules/postcss-cli/bin/postcss
```

#### Sift

Sift offers bash-completion support, too.

```bash
pkg install bash-completion sift
```

### Upgrading packages

```bash
pkg upgrade
```

### Remove extras repository from Termux

Remove the extras repository from Termux by

- Uninstalling its packages with `pkg uninstall PACKAGE_NAME`,
- removing its entry from the packages sources list

```bash
rm $PREFIX/etc/apt/sources.list.d/holehan.list
```

- removing the signing key

```bash
apt-key del C9681FDF7AEBD90F
```

### Alternative: Build it yourself

The scripts to build the packages [can be found at this fork](https://github.com/holehan/termux-packages) of the [official termux repository](https://github.com/termux/termux-packages). Find the Hugo build script at <https://github.com/holehan/termux-packages/tree/master/packages/hugo>.
