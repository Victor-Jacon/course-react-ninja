const gulp = require('gulp')

// Ele permite que a gente crie um processo node filho. Este processo filho a gente pode passar comandos de terminal pra ele, como se estivessemos dentro do terminal mesmo.
const { spawn } = require('child_process')

gulp.task('lint', (cb) => {
    const cmd = spawn('yarn', ['lint'], { stdio: 'inherit' })
    cmd.on('close', () => cb())
})

gulp.task('default', ['lint'], () => {
    gulp.watch('src/**/*.js', ['lint'])
})