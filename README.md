# Termux APT repository for Hugo

This apt repository contains [Hugo](https://gohugo.io/) packages for [Termux](https://termux.com/). Hugo is a fast and flexible Static Site Generator written in Go. More packages like [sift](https://github.com/svent/sift) might be added to this repository at a later time.

### Requirements

Make sure you have installed all required packages to manage extra termux sources. That would be `curl` to download the signing key and `gnupg` to import it

```bash
$ pkg install curl gnupg
```
### Add extras repository to Termux

Access the repo by adding a file named holehan.list to `$PREFIX/etc/apt/sources.list.d` containing the single line
`deb https://termux.holehan.org/ termux extras`. Then import the gpg key the repository was signed with:

```bash
$ curl https://termux.holehan.org/holehan.key -o holehan.key
$ apt-key add holehan.key
```

### Install hugo

The hugo package comes with bash-completion support and man pages. So you may want to install these packages as well:

```bash
$ pkg install bash-completion man hugo
```
