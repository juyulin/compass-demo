module.exports = function (grunt) {

    grunt.initConfig({
        // 指定打包目录
        buildBase: 'build',
        //源码目录
        srcBase: 'src',

        clean: {
            build: [
                '<%=buildBase %>'
            ]
        },
        copy: {
            all: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= srcBase %>',
                        src: ['**/*.css'],
                        dest: '<%=buildBase %>'
                    }
                ]
            }

        },
        compass: {
            dist: {
                options: {
                    sassDir: '<%= srcBase %>',
                    specify: '<%= srcBase %>/index.sass',
                    cssDir : '<%= srcBase %>'
                }
            }
        },
        cssmin: {
            build: {
                expand: true,
                cwd: '<%=buildBase %>',
                src: ['**/*.css', '!**/*-min.css'],
                dest: '<%=buildBase %>',
                ext: '-min.css'
            }
        },
        watch: {
            compass: {
                files: ['<%= srcBase %>/**/*.sass'],
                tasks: ['compass', 'cssmin']
            }
        }
    });
    /**
     * 载入使用到的通过NPM安装的模块
     */
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('default', ['clean','compass','copy:all','cssmin:build']);

};
