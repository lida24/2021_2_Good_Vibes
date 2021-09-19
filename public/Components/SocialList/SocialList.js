export default class SocialList {

    #parent;
    #className;

    constructor(parent) {
        this.#parent = parent;
    }

    set className(className) {
        this.#className = className;
    }

    generate() {
        const socialWrapper = CreateDiv({
            parent: this.#parent,
            classesNames: [
                'form-wrapper',
            ],
        });

        const socialList = CreateDiv({
            parent: socialWrapper,
            classesNames: [
                this.#className,
                'social-list',
                'align-center',
            ],
        });

        CreateI({
            parent: CreateDiv({
                parent: socialList,
                classesNames: [
                    'align-center',
                    'facebook-bg',
                ],
            }),
            classesNames: [
                'bx',
                'bxl-facebook',
            ]
        });

        CreateI({
            parent: CreateDiv({
                parent: socialList,
                classesNames: [
                    'align-center',
                    'google-bg',
                ],
            }),
            classesNames: [
                'bx',
                'bxl-google',
            ]
        });

        CreateI({
            parent: CreateDiv({
                parent: socialList,
                classesNames: [
                    'align-center',
                    'twitter-bg',
                ],
            }),
            classesNames: [
                'bx',
                'bxl-twitter',
            ]
        });

        CreateI({
            parent: CreateDiv({
                parent: socialList,
                classesNames: [
                    'align-center',
                    'insta-bg',
                ],
            }),
            classesNames: [
                'bx',
                'bxl-instagram-alt',
            ]
        });
    }
}