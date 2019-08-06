const fetch = require("node-fetch")
const fs = require('fs');

function buildTableForCat(cat, pods) {
    let md = `


## ${cat.link}
|   |   პოდკასტი  |  წამყვანი |   აღწერა   |        პლატფორმები        |
|---|:-----------:|:---------:|:----------:|:-------------------------:|`
    pods.forEach(pod => {
        let entry = `
| <img src="${pod.logo}" width=80> | [${pod.title}](${pod.website}) | ${pod.author} | ${pod.description} |`
        
        if (pod.gpod && pod.gpod != '')
            entry += `[<img src="assets/gpod.png" height=22>](${pod.gpod}) `

        if (pod.itunes && pod.itunes != '')
            entry += `[<img src="assets/itunes.png" height=22>](${pod.itunes}) `
        
        if (pod.soundcloud && pod.soundcloud != '')
            entry += `[<img src="assets/soundcloud.png" height=22>](${pod.soundcloud}) `
        
        if (pod.pocketcasts && pod.pocketcasts != '')
            entry += `[<img src="assets/pocketcasts.png" height=22>](${pod.pocketcasts}) `

        if (pod.spotify && pod.spotify != '')
            entry += `[<img src="assets/spotify.png" height=22>](${pod.spotify}) `

        if (pod.youtube && pod.youtube != '')
            entry += `[<img src="assets/youtube.png" height=22>](${pod.youtube}) `

        entry += `|`
        md += entry
    });

    return md
}

function buildTOC(cats) {
    let md = `<!--AGC: AUTO GENERATED CONTENT STARTS HERE -->
## კატეგორიები
`   
    for (let key in cats)
        if (cats[key].available)
            md += `- ${cats[key].link}
`
        else
            md += `- ${key}
`

    md += `
___
`
    return md
}





async function update() {

    let markdown = ``

    let readme = fs.readFileSync('../README.md', 'utf8').split("<!--AGC")[0]
    
    let cats = JSON.parse(fs.readFileSync('cats.json', 'utf8'))
    
    let db = JSON.parse(fs.readFileSync('db.json', 'utf8'))
    
    let grouped = db.reduce(
        (pods, p) => pods.set(p.category, [...pods.get(p.category)||[], p]),
        new Map()
    );
    
    // Available Categories
    let aCats = [...grouped.keys()]
    for (let key in cats){
        if (aCats.includes(key))
            cats[key].available = true
    }

    // Generating Markdown
    markdown += readme
    markdown += buildTOC(cats)

    aCats.forEach(ac => {
        markdown += buildTableForCat(cats[ac], grouped.get(ac))
    });
    

    await fs.writeFile('../README.md', markdown)
}

update()