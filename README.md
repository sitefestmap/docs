# Site Festival Map Docs

Docs for 2023 site and a few ideas for potential 2024 additions.

[Mapdocs](https://mapdocs.sitefestival.org.uk)

## Make a Pull request

[Map Docs](https://github.com/sitefestmap/mapdocs/pulls)

## Clone this repo

```bash
cd projects
git clone https://github.com/sitefestmap/mapdocs.git
cd mapdocs-main
bun i && bun dev
```

## DNS

- 123reg CNAME mapdocs mapdocs.fly.dev

```bash
flyctl certs create mapdocs.sitefestival.org.uk
```