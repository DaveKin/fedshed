(function(){
    var config = {
        editorTheme: 'ace/theme/monokai'
    }
    window.app = {
        editors: {
            markup: createEditor(document.querySelector('.markupEditor'), 'ace/mode/html'),
            styles: createEditor(document.querySelector('.styleEditor'), 'ace/mode/css'),
            script: createEditor(document.querySelector('.scriptEditor'), 'ace/mode/javascript'),
            tests: createEditor(document.querySelector('.testEditor'), 'ace/mode/javascript')
        }
    }

    function createEditor(el,mode){
        var editor = ace.edit(el);
        editor.setTheme(config.editorTheme);
        editor.getSession().setMode(mode);
        return editor;
    }

    function setVisibility(selector,visible){
        var el = document.querySelector(selector);
        el.style.display = (eval(visible))? 'block' : 'none';
    }

    var togglers = document.querySelectorAll('[data-toggle]');
    for (var i = 0; i < togglers.length; i++) {
        setVisibility(togglers[i].dataset.toggle, togglers[i].dataset.toggleon);
        togglers[i].addEventListener('click', function(){
            this.dataset.toggleon = !eval(this.dataset.toggleon);
            setVisibility(this.dataset.toggle, this.dataset.toggleon);
        });
    };

    function render(){
        var source = {
            markup: app.editors.markup.getValue(),
            styles: app.editors.styles.getValue(),
            script: app.editors.styles.getValue()
        };
        source = {
            markup: 'hello',
            styles: 'stylish',
            script: 'scripted'
        };
        fetch('/process', {
            method: 'post',
            body: JSON.stringify(source)
        }).then(function(data){
            console.log(data);
        });
    }

    function process(change, editor){
        var data = {
            format: editor.$modeId,
            content: editor.doc.getValue()
        }
        console.log(data);
    }

    app.editors.markup.getSession().on('change', process);
    app.editors.styles.getSession().on('change', render);
    app.editors.script.getSession().on('change', render);

})();