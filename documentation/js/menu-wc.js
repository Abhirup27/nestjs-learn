'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-learn documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-698fcd8d8db2d316b322032791b6d2843cb313e5f1a100f854ef0c4ebc4da879bc15079f59f0f9097b21de0436af57e69a21667278a014c77aebbdbd958e95d6"' : 'data-bs-target="#xs-controllers-links-module-AppModule-698fcd8d8db2d316b322032791b6d2843cb313e5f1a100f854ef0c4ebc4da879bc15079f59f0f9097b21de0436af57e69a21667278a014c77aebbdbd958e95d6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-698fcd8d8db2d316b322032791b6d2843cb313e5f1a100f854ef0c4ebc4da879bc15079f59f0f9097b21de0436af57e69a21667278a014c77aebbdbd958e95d6"' :
                                            'id="xs-controllers-links-module-AppModule-698fcd8d8db2d316b322032791b6d2843cb313e5f1a100f854ef0c4ebc4da879bc15079f59f0f9097b21de0436af57e69a21667278a014c77aebbdbd958e95d6"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-698fcd8d8db2d316b322032791b6d2843cb313e5f1a100f854ef0c4ebc4da879bc15079f59f0f9097b21de0436af57e69a21667278a014c77aebbdbd958e95d6"' : 'data-bs-target="#xs-injectables-links-module-AppModule-698fcd8d8db2d316b322032791b6d2843cb313e5f1a100f854ef0c4ebc4da879bc15079f59f0f9097b21de0436af57e69a21667278a014c77aebbdbd958e95d6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-698fcd8d8db2d316b322032791b6d2843cb313e5f1a100f854ef0c4ebc4da879bc15079f59f0f9097b21de0436af57e69a21667278a014c77aebbdbd958e95d6"' :
                                        'id="xs-injectables-links-module-AppModule-698fcd8d8db2d316b322032791b6d2843cb313e5f1a100f854ef0c4ebc4da879bc15079f59f0f9097b21de0436af57e69a21667278a014c77aebbdbd958e95d6"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-443c2d3885696572bfff9e932e5b6cdc0caf06c73828192129148bb2633acf897a2fe39a5a7c401a8c1f82867bb0776bab22a6b53c17ca439c0f8082ae9471bd"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-443c2d3885696572bfff9e932e5b6cdc0caf06c73828192129148bb2633acf897a2fe39a5a7c401a8c1f82867bb0776bab22a6b53c17ca439c0f8082ae9471bd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-443c2d3885696572bfff9e932e5b6cdc0caf06c73828192129148bb2633acf897a2fe39a5a7c401a8c1f82867bb0776bab22a6b53c17ca439c0f8082ae9471bd"' :
                                            'id="xs-controllers-links-module-AuthModule-443c2d3885696572bfff9e932e5b6cdc0caf06c73828192129148bb2633acf897a2fe39a5a7c401a8c1f82867bb0776bab22a6b53c17ca439c0f8082ae9471bd"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-443c2d3885696572bfff9e932e5b6cdc0caf06c73828192129148bb2633acf897a2fe39a5a7c401a8c1f82867bb0776bab22a6b53c17ca439c0f8082ae9471bd"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-443c2d3885696572bfff9e932e5b6cdc0caf06c73828192129148bb2633acf897a2fe39a5a7c401a8c1f82867bb0776bab22a6b53c17ca439c0f8082ae9471bd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-443c2d3885696572bfff9e932e5b6cdc0caf06c73828192129148bb2633acf897a2fe39a5a7c401a8c1f82867bb0776bab22a6b53c17ca439c0f8082ae9471bd"' :
                                        'id="xs-injectables-links-module-AuthModule-443c2d3885696572bfff9e932e5b6cdc0caf06c73828192129148bb2633acf897a2fe39a5a7c401a8c1f82867bb0776bab22a6b53c17ca439c0f8082ae9471bd"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostModule.html" data-type="entity-link" >PostModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostModule-15f8a36f9d7430c4c70bde8d173b0e622315be1676c3f9e83fb2e2a2f000eee8e4a085b03cfa23e650e12d4c21a95aba3778eede8e52664869feb0191cfca28b"' : 'data-bs-target="#xs-controllers-links-module-PostModule-15f8a36f9d7430c4c70bde8d173b0e622315be1676c3f9e83fb2e2a2f000eee8e4a085b03cfa23e650e12d4c21a95aba3778eede8e52664869feb0191cfca28b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostModule-15f8a36f9d7430c4c70bde8d173b0e622315be1676c3f9e83fb2e2a2f000eee8e4a085b03cfa23e650e12d4c21a95aba3778eede8e52664869feb0191cfca28b"' :
                                            'id="xs-controllers-links-module-PostModule-15f8a36f9d7430c4c70bde8d173b0e622315be1676c3f9e83fb2e2a2f000eee8e4a085b03cfa23e650e12d4c21a95aba3778eede8e52664869feb0191cfca28b"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostModule-15f8a36f9d7430c4c70bde8d173b0e622315be1676c3f9e83fb2e2a2f000eee8e4a085b03cfa23e650e12d4c21a95aba3778eede8e52664869feb0191cfca28b"' : 'data-bs-target="#xs-injectables-links-module-PostModule-15f8a36f9d7430c4c70bde8d173b0e622315be1676c3f9e83fb2e2a2f000eee8e4a085b03cfa23e650e12d4c21a95aba3778eede8e52664869feb0191cfca28b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostModule-15f8a36f9d7430c4c70bde8d173b0e622315be1676c3f9e83fb2e2a2f000eee8e4a085b03cfa23e650e12d4c21a95aba3778eede8e52664869feb0191cfca28b"' :
                                        'id="xs-injectables-links-module-PostModule-15f8a36f9d7430c4c70bde8d173b0e622315be1676c3f9e83fb2e2a2f000eee8e4a085b03cfa23e650e12d4c21a95aba3778eede8e52664869feb0191cfca28b"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-688263a581f984bd29bfdf3330467b1b30670646df1f9d78209ffd5878f2f4e9d16447f5781638300b3b46c0c326c344cb5809858da62f9524dd7e8f32663f68"' : 'data-bs-target="#xs-controllers-links-module-UserModule-688263a581f984bd29bfdf3330467b1b30670646df1f9d78209ffd5878f2f4e9d16447f5781638300b3b46c0c326c344cb5809858da62f9524dd7e8f32663f68"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-688263a581f984bd29bfdf3330467b1b30670646df1f9d78209ffd5878f2f4e9d16447f5781638300b3b46c0c326c344cb5809858da62f9524dd7e8f32663f68"' :
                                            'id="xs-controllers-links-module-UserModule-688263a581f984bd29bfdf3330467b1b30670646df1f9d78209ffd5878f2f4e9d16447f5781638300b3b46c0c326c344cb5809858da62f9524dd7e8f32663f68"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-688263a581f984bd29bfdf3330467b1b30670646df1f9d78209ffd5878f2f4e9d16447f5781638300b3b46c0c326c344cb5809858da62f9524dd7e8f32663f68"' : 'data-bs-target="#xs-injectables-links-module-UserModule-688263a581f984bd29bfdf3330467b1b30670646df1f9d78209ffd5878f2f4e9d16447f5781638300b3b46c0c326c344cb5809858da62f9524dd7e8f32663f68"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-688263a581f984bd29bfdf3330467b1b30670646df1f9d78209ffd5878f2f4e9d16447f5781638300b3b46c0c326c344cb5809858da62f9524dd7e8f32663f68"' :
                                        'id="xs-injectables-links-module-UserModule-688263a581f984bd29bfdf3330467b1b30670646df1f9d78209ffd5878f2f4e9d16447f5781638300b3b46c0c326c344cb5809858da62f9524dd7e8f32663f68"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTokenDto.html" data-type="entity-link" >CreateTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetPostsParamsDto.html" data-type="entity-link" >GetPostsParamsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});