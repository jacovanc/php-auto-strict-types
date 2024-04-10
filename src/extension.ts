import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.workspace.onDidSaveTextDocument((document) => {
        if (document.languageId === 'php' && document.uri.scheme === 'file') {
            addStrictTypesDeclaration(document);
        }
    });

    context.subscriptions.push(disposable);
}

async function addStrictTypesDeclaration(document: vscode.TextDocument) {
    const text = document.getText();
    if (text.includes('declare(strict_types=1);')) {
        // Strict types declaration already present, do nothing
        return;
    }

    const edit = new vscode.WorkspaceEdit();
    const firstLine = document.lineAt(0).text;

    if (firstLine.includes('<?php')) {
        // Add declaration after PHP opening tag
        edit.insert(document.uri, new vscode.Position(0, firstLine.length), ' declare(strict_types=1); ');
    } else {
        // Add PHP tags and declaration
        edit.insert(document.uri, new vscode.Position(0, 0), '<?php declare(strict_types=1); ?>\n');
    }

    await vscode.workspace.applyEdit(edit);
}

export function deactivate() {}
