const sass = require('sass');
const fs = require('fs');

const input = 'sass/styles.scss';
const output = 'css/styles.min.css';

sass.render({file: input, outputStyle: 'compressed'}, function(err, result) {
    if (!err) {
        fs.writeFile(output, result.css.toString().replace(/\n/g, ''), function(err) {
            if (!err) {
                console.log(`${input} успешно скомпилирован в ${output}`);
            }
            else {
                console.error('Ошибка записи файла', err);
            }
        });
    }
    else {
        console.error('Ошибка компиляции', err);
    }
});