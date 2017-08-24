module.exports = (dato, root, i18n) => {
  console.log(dato.landingPages);
  dato.landingPages.forEach((landingPages, i) => {
    root.createPost(`content/landpage/${landingPages.lpUrl}.md`, "yaml",{
      frontmatter: {
        title: landingPages.lpBrand,
        model: landingPages.lpModel,
        engine: landingPages.lpEngine,
        lpurl: landingPages.lpUrl,
        id: landingPages.template.templateName,
        image: landingPages.image.toMap()
      },
      content: landingPages.lpBrand
    });
  });
}
