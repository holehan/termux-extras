const gulp = require("gulp");
const pump = require("pump");
const htmlclean = require("gulp-htmlclean");
const purgecss = require("gulp-purgecss");
const srihash = require("gulp-sri-hash");

gulp.task("htmlclean", cb => {
  pump([gulp.src(["docs/**/*.html"]), htmlclean(), gulp.dest("docs")], cb);
});

gulp.task("purgecss", cb => {
  pump(
    [
      gulp.src("docs/scss/**/*.css"),
      purgecss({
        content: ["docs/**/*.html"]
      }),
      gulp.dest("docs/scss")
    ],
    cb
  );
});

gulp.task("srihash", cb => {
  pump([gulp.src("docs/**/*.html"), srihash(), gulp.dest("docs")], cb);
});
