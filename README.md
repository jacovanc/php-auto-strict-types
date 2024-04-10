# php-auto-strict-types README

## Features

php-auto-strict-types automatically adds `declare(strict_types=1);` to your PHP files on save, enforcing strict type declarations in your project. 

It intelligently detects whether a file already contains the strict types declaration and only adds it if necessary. Additionally, the extension respects the PHP opening tag (`<?php`) in your file, ensuring correct syntax.

## Requirements

There are no specific requirements for this extension, other than having Visual Studio Code installed.

## Extension Settings

This extension does not require any specific settings. It works out-of-the-box once installed.

## Known Issues

No known issues at the moment. If you encounter any problems, please open an issue in the GitHub repository.

## Release Notes
This is pre-release. Expect issues.
### 0.0.12

Initial release of php-auto-strict-types.

- Automatically adds `declare(strict_types=1);` to PHP files on save.
- Respects existing PHP opening tags.
- Checks the entire file to avoid duplicate declarations.

# TODO
- [] Trim spacing around opening <?php tags before adding declaration