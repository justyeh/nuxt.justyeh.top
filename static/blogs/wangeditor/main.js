require.config({
	paths:{
		'jquery':'http://cdn.bootcss.com/jquery/1.9.1/jquery.min',
		'wangEditor': 'wangEditor/js/wangEditor.min',
		'editorCfg':'wangEditor/wangEditor.config'
	}
});
require(['wangEditor','editorCfg'], function(wangEditor,editorCfg){
    $(function(){
        var editor = new wangEditor('editor');
        editor.config.emotions = editorCfg.emotions
        editor.create();
    });
});
