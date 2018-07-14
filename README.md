# Termux APT repository for Hugo

This apt repository contains [Hugo](https://gohugo.io/) packages for [Termux](https://termux.com/). Hugo is a fast and flexible Static Site Generator written in Go. More packages like [sift](https://github.com/svent/sift) might be added to this repository at a later time.

### Requirements

Make sure you have installed all required packages to get access to the apt repository, namely `curl` to download the signing key and `gnupg` to import it:

```bash
pkg install curl gnupg
```

### Add extras repository to Termux

Access the repo by adding a file named e.g. `holehan.list` to `$PREFIX/etc/apt/sources.list.d` containing the single line
`deb https://termux.holehan.org/ termux extras`. Then import the GPG key the repository was signed with. Just follow the steps below:

```bash
mkdir -p $PREFIX/etc/apt/sources.list.d
echo "deb https://termux.holehan.org/ termux extras" \
> $PREFIX/etc/apt/sources.list.d/holehan.list
curl https://termux.holehan.org/holehan.key -o holehan.key
apt-key add holehan.key
rm holehan.key # Delete the key after import 
```

### Install hugo

The Hugo package comes with bash-completion support and man pages. So you may want to install these packages as well:

```bash
pkg install bash-completion man hugo
```

You won't be able to use the `hugo` bash-completion until you start a new Termux session. Now impress your friends and have fun again building great websites with Hugo and Termux!

### Alternative: Build it yourself

The scripts to build the packages [can be found at my fork](https://github.com/holehan/termux-packages) of the [official termux repository](https://github.com/termux/termux-packages). Find the Hugo build script at <https://github.com/holehan/termux-packages/tree/master/packages/hugo>
