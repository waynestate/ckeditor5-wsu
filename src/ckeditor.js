import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';

// Plugins to include in the build.
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { GeneralHtmlSupport } from '@ckeditor/ckeditor5-html-support';
import {
    Image,
    ImageCaption,
    ImageResize,
    ImageStyle,
    ImageToolbar,
    ImageInsertViaUrl
} from '@ckeditor/ckeditor5-image';
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent';
import { TextPartLanguage } from '@ckeditor/ckeditor5-language';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { SourceEditing } from "@ckeditor/ckeditor5-source-editing";
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';

export default class ClassicEditor extends ClassicEditorBase {}

ClassicEditor.builtinPlugins = [
    Alignment,
    Autoformat,
    BlockQuote,
    Bold,
    Essentials,
    GeneralHtmlSupport,
    Heading,
    Image,
    ImageCaption,
    ImageResize,
    ImageStyle,
    ImageToolbar,
    ImageInsertViaUrl,
    Indent,
    IndentBlock,
    Italic,
    Link,
    List,
    MediaEmbed,
    Paragraph,
    PasteFromOffice,
    SourceEditing,
    Table,
    TableToolbar,
    TextPartLanguage,
    TextTransformation
];

ClassicEditor.defaultConfig = {
    toolbar: {
        items: [
            'sourceEditing',
            'alignment',
            'heading',
            '|',
            'bold',
            'italic',
            'link',
            'textPartLanguage',
            'bulletedList',
            'numberedList',
            '|',
            'outdent',
            'indent',
            '|',
            'insertImage',
            'blockQuote',
            'insertTable',
            'mediaEmbed',
            'undo',
            'redo'
        ]
    },
    htmlSupport: {
        allow: [
        ],
    },
    language: {
        textPartLanguage: [
            { title: 'Arabic', languageCode: 'ar' },
            { title: 'Chinese', languageCode: 'zh' },
            { title: 'French', languageCode: 'fr' },
            { title: 'German', languageCode: 'de' },
            { title: 'Indonesian', languageCode: 'id' },
            { title: 'Italian', languageCode: 'it' },
            { title: 'Japanese', languageCode: 'ja' },
            { title: 'Korean', languageCode: 'ko' },
            { title: 'Latin', languageCode: 'la' },
            { title: 'Portuguese', languageCode: 'pt' },
            { title: 'Spanish', languageCode: 'es' },
            { title: 'Thai', languageCode: 'th' },
            { title: 'Turkish', languageCode: 'tr' },
            { title: 'Vietnamese', languageCode: 'vi' },
        ]
    },
    image: {
        toolbar: [
            'imageTextAlternative',
            'toggleImageCaption',
            'imageStyle:inline',
            'imageStyle:block',
            'imageStyle:side'
        ]
    },
    table: {
        contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells'
        ]
    }
};

window.ClassicEditor = ClassicEditor;
