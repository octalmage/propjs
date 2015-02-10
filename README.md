# propjs
Check global DNS propagation.

```
  Usage: prop [options] <domain>

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
    -f, --full     Show full dig output.
    -w, --www      Also dig www version of domain.
```
### Install

```
npm install propjs -g
```

### Example

**prop github.com**

```
CA
192.30.252.129

US
192.30.252.130

DE
192.30.252.129

EU
192.30.252.129

JP
192.30.252.131

FR
192.30.252.129
```
