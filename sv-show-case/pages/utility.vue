<template>
  <div class="utility">
    <div class="utility__unit">
      <span class="utility__unit__title"> Spacing </span>

      <div class="utility__unit__block">
        <span class="utility__unit__block__title"> margin, padding </span>

        <div class="utility__unit__block__content">
          where property is one of:
          <ul>
            <li>m - for classes that set margin</li>
            <li>p - for classes that set padding</li>
          </ul>
          <br />
          where sides is one of:
          <ul>
            <li>t - for classes that set margin-top or padding-top</li>
            <li>b - for classes that set margin-bottom or padding-bottom</li>
            <li>l - for classes that set margin-left or padding-left</li>
            <li>r - for classes that set margin-right or padding-right</li>
          </ul>
          <br />
          where size is one of:
          <ul>
            <li>auto - for classes that set the margin to auto</li>
            <li>
              0 - for classes that eliminate the margin or padding by setting it
              to 0
            </li>
            <li>
              05 - (by default) for classes that set the margin or padding to
              0.5rem
            </li>
            <li>
              075 - (by default) for classes that set the margin or padding to
              0.75rem
            </li>
            <li>
              1 - (by default) for classes that set the margin or padding to
              1rem
            </li>
            <li>
              2 - (by default) for classes that set the margin or padding to
              2rem
            </li>
          </ul>
          <br />
          example:
          <ul>
            <li>
              <code> .m-auto { margin: auto; } </code>
            </li>
            <li>
              <code> .p-auto { padding: auto; } </code>
            </li>
            <li>
              <code> .mt-05 { margin-top: 0.5rem; }</code>
            </li>
            <li>
              <code> .pb-2 { padding-bottom: 2rem; }</code>
            </li>
          </ul>
        </div>
      </div>

      <div class="utility__unit__block">
        <span class="utility__unit__block__title"> gap </span>

        <div class="utility__unit__block__content">
          where size is one of:
          <ul>
            <li>auto - for classes that set the gap to auto</li>
            <li>0 - for classes that eliminate the gap by setting it to 0</li>
            <li>05 - (by default) for classes that set the gap to 0.5rem</li>
            <li>075 - (by default) for classes that set the gap to 0.75rem</li>
            <li>1 - (by default) for classes that set the gap to 1rem</li>
            <li>2 - (by default) for classes that set the gap to 2rem</li>
          </ul>
          <br />
          example:
          <ul>
            <li>
              <code> .gap-1 { gap: 1rem; } </code>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="utility__unit">
      <span class="utility__unit__title"> Color </span>

      <div class="utility__unit__block">
        <span class="utility__unit__block__title"> variant </span>

        <div class="utility__unit__block__content">
          where variant is one of:
          <ul>
            <li>
              <div class="align-center gap-1">
                primary
                <div
                  style="width: 1rem; height: 1rem; background-color: #1f42a2"
                ></div>
              </div>
            </li>
            <li>
              <div class="align-center gap-1">
                secondary
                <div
                  style="width: 1rem; height: 1rem; background-color: #c5c5d5"
                ></div>
              </div>
            </li>
            <li>
              <div class="align-center gap-1">
                success
                <div
                  style="width: 1rem; height: 1rem; background-color: #2ca01c"
                ></div>
              </div>
            </li>
            <li>
              <div class="align-center gap-1">
                danger
                <div
                  style="width: 1rem; height: 1rem; background-color: #ff0000"
                ></div>
              </div>
            </li>
            <li>
              <div class="align-center gap-1">
                warning
                <div
                  style="width: 1rem; height: 1rem; background-color: #f7b500"
                ></div>
              </div>
            </li>
            <li>
              <div class="align-center gap-1">
                light
                <div
                  style="width: 1rem; height: 1rem; background-color: #f2f2f5"
                ></div>
              </div>
            </li>
            <li>
              <div class="align-center gap-1">
                dark
                <div
                  style="width: 1rem; height: 1rem; background-color: #1d1d20"
                ></div>
              </div>
            </li>
            <li>
              <div class="align-center gap-1">
                white
                <div
                  style="width: 1rem; height: 1rem; background-color: #ffffff"
                ></div>
              </div>
            </li>
            <li>
              <div class="align-center gap-1">
                black
                <div
                  style="width: 1rem; height: 1rem; background-color: #000000"
                ></div>
              </div>
            </li>
            <li>
              <div class="align-center gap-1">
                gray1
                <div
                  style="width: 1rem; height: 1rem; background-color: #6d7278"
                ></div>
              </div>
            </li>
            <li>
              <div class="align-center gap-1">
                gray2
                <div
                  style="width: 1rem; height: 1rem; background-color: #e3e3ea"
                ></div>
              </div>
            </li>
            <li>
              <div class="align-center gap-1">
                gray3
                <div
                  style="width: 1rem; height: 1rem; background-color: #f0f4f8"
                ></div>
              </div>
            </li>
          </ul>
          <br />
        </div>
      </div>

      <div class="utility__unit__block">
        <span class="utility__unit__block__title"> text color </span>

        <div class="utility__unit__block__content">
          <ul>
            <li class="text-primary">.text-primary</li>
            <li class="text-secondary">.text-secondary</li>
            <li class="text-success">.text-success</li>
            <li class="text-danger">.text-danger</li>
            <li class="text-warning">.text-warning</li>
            <li class="text-light">.text-light</li>
            <li class="text-dark">.text-dark</li>
            <li class="text-white">.text-white</li>
            <li class="text-black">.text-black</li>
          </ul>
        </div>
      </div>

      <div class="utility__unit__block">
        <span class="utility__unit__block__title"> background color </span>

        <div class="utility__unit__block__content">
          <ul>
            <li class="bg-primary">.bg-primary</li>
            <li class="bg-secondary">.bg-secondary</li>
            <li class="bg-success">.bg-success</li>
            <li class="bg-danger">.bg-danger</li>
            <li class="bg-warning">.bg-warning</li>
            <li class="bg-light">.bg-light</li>
            <li class="bg-dark">.bg-dark</li>
            <li class="bg-white">.bg-white</li>
            <li class="bg-black">.bg-black</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="utility__unit">
      <span class="utility__unit__title"> Alignment </span>

      <div class="utility__unit__block">
        <span class="utility__unit__block__title"> text alignment </span>

        <div class="utility__unit__block__content">
          where sides is one of:
          <ul>
            <li>left - for classes that align text to left</li>
            <li>center - for classes that align text to center</li>
            <li>right - for classes that align text to right</li>
          </ul>
          <br />
          example:
          <ul>
            <li>
              .text-left
              <div class="bg-dark text-left">
                <span class="bg-primary text-white">text</span>
              </div>
            </li>
            <li>
              .text-center
              <div class="bg-dark text-center">
                <span class="bg-primary text-white">text</span>
              </div>
            </li>
            <li>
              .text-right
              <div class="bg-dark text-right">
                <span class="bg-primary text-white">text</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="utility__unit__block">
        <span class="utility__unit__block__title"> justify content </span>

        <div class="utility__unit__block__content">
          where sides is one of:
          <ul>
            <li>start - for classes that align content to start</li>
            <li>center - for classes that align content to center</li>
            <li>end - for classes that align content to end</li>
            <li>
              between - for classes that align content to keep same distance
              between
            </li>
            <li>
              around - for classes that align content to keep same distance
              around item
            </li>
          </ul>
          <br />
          example:
          <ul>
            <li>
              .justify-start
              <div class="justify-start bg-dark">
                <span class="p-1 bg-primary text-white">item 1</span>
                <span class="p-1 bg-primary text-white">item 2</span>
                <span class="p-1 bg-primary text-white">item 3</span>
              </div>
            </li>
            <li>
              .justify-center
              <div class="justify-center bg-dark">
                <span class="p-1 bg-primary text-white">item 1</span>
                <span class="p-1 bg-primary text-white">item 2</span>
                <span class="p-1 bg-primary text-white">item 3</span>
              </div>
            </li>
            <li>
              .justify-end
              <div class="justify-end bg-dark">
                <span class="p-1 bg-primary text-white">item 1</span>
                <span class="p-1 bg-primary text-white">item 2</span>
                <span class="p-1 bg-primary text-white">item 3</span>
              </div>
            </li>
            <li>
              .justify-between
              <div class="justify-between bg-dark">
                <span class="p-1 bg-primary text-white">item 1</span>
                <span class="p-1 bg-primary text-white">item 2</span>
                <span class="p-1 bg-primary text-white">item 3</span>
              </div>
            </li>
            <li>
              .justify-around
              <div class="justify-around bg-dark">
                <span class="p-1 bg-primary text-white">item 1</span>
                <span class="p-1 bg-primary text-white">item 2</span>
                <span class="p-1 bg-primary text-white">item 3</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="utility__unit__block">
        <span class="utility__unit__block__title"> align items </span>

        <div class="utility__unit__block__content">
          where sides is one of:
          <ul>
            <li>start - for classes that align items to start on y-axis</li>
            <li>center - for classes that align items to center on y-axis</li>
            <li>end - for classes that align items to end on y-axis</li>
            <li>
              baseline - for classes that align items to keep on baseline on
              y-axis
            </li>
            <li>stretch - for classes that align items to stretch on y-axis</li>
          </ul>
          <br />
          example:
          <ul>
            <li>
              .align-start
              <div class="align-start bg-dark" style="height: 3rem">
                <div class="bg-primary text-white">item 1</div>
                <div class="bg-primary text-white">item 2</div>
                <div class="bg-primary text-white">item 3</div>
              </div>
            </li>
            <li>
              .align-center
              <div class="align-center bg-dark" style="height: 3rem">
                <div class="bg-primary text-white">item 1</div>
                <div class="bg-primary text-white">item 2</div>
                <div class="bg-primary text-white">item 3</div>
              </div>
            </li>
            <li>
              .align-end
              <div class="align-end bg-dark" style="height: 3rem">
                <div class="bg-primary text-white">item 1</div>
                <div class="bg-primary text-white">item 2</div>
                <div class="bg-primary text-white">item 3</div>
              </div>
            </li>
            <li>
              .align-baseline
              <div class="align-baseline bg-dark" style="height: 3rem">
                <div class="bg-primary text-white">item 1</div>
                <div class="bg-primary text-white">item 2</div>
                <div class="bg-primary text-white">item 3</div>
              </div>
            </li>
            <li>
              .align-stretch
              <div class="align-stretch bg-dark" style="height: 3rem">
                <div class="bg-primary text-white">item 1</div>
                <div class="bg-primary text-white">item 2</div>
                <div class="bg-primary text-white">item 3</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="utility__unit">
      <span class="utility__unit__title"> Display </span>

      <div class="utility__unit__block">
        <span class="utility__unit__block__title"> </span>

        <div class="utility__unit__block__content">
          <ul>
            <li>
              <code> .d-none { display: none; } </code>
            </li>
            <li>
              <code> .d-flex { display: flex; } </code>
            </li>
            <li>
              <code> .d-grid { display: grid; } </code>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="utility__unit">
      <span class="utility__unit__title"> Position </span>

      <div class="utility__unit__block">
        <span class="utility__unit__block__title"> </span>

        <div class="utility__unit__block__content">
          <ul>
            <li>
              <code> .position-static { position: static; } </code>
            </li>
            <li>
              <code> .position-relative { position: relative; } </code>
            </li>
            <li>
              <code> .position-absolute { position: absolute; } </code>
            </li>
            <li>
              <code> .position-fixed { position: fixed; } </code>
            </li>
            <li>
              <code> .position-sticky { position: sticky; } </code>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="utility__unit">
      <span class="utility__unit__title"> Text </span>

      <div class="utility__unit__block">
        <span class="utility__unit__block__title"> font size </span>

        <div class="utility__unit__block__content">
          <ul>
            <li>
              .font-lg:&nbsp;
              <span class="font-lg">this is large text</span>
            </li>
            <li>
              .font-md:&nbsp;
              <span class="font-md">this is normal text</span>
            </li>
            <li>
              .font-sm:&nbsp;
              <span class="font-sm">this is small text</span>
            </li>
            <li>
              .font-xs:&nbsp;
              <span class="font-xs">this is smaller text</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="utility__unit__block">
        <span class="utility__unit__block__title"> font heading size </span>

        <div class="utility__unit__block__content">
          <ul>
            <li>
              .font-heading-xl:&nbsp;
              <span class="font-heading-xl">this is larger heading text</span>
            </li>
            <li>
              .font-heading-lg:&nbsp;
              <span class="font-heading-lg">this is large heading text</span>
            </li>
            <li>
              .font-heading-md:&nbsp;
              <span class="font-heading-md">this is normal heading text</span>
            </li>
            <li>
              .font-heading-sm:&nbsp;
              <span class="font-heading-sm">this is small heading text</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="utility__unit__block">
        <span class="utility__unit__block__title"> font family </span>

        <div class="utility__unit__block__content">
          <ul>
            <li>
              .font-papyrus:&nbsp;
              <span class="font-papyrus">this is papyrus</span>
            </li>
            <li>
              .font-parisienne:&nbsp;
              <span class="font-parisienne">this is parisienne</span>
            </li>
            <li>
              .font-pinyon:&nbsp;
              <span class="font-pinyon">this is pinyon</span>
            </li>
            <li>
              .font-trattatello:&nbsp;
              <span class="font-trattatello">this is trattatello</span>
            </li>
            <li>
              .font-dancing:&nbsp;
              <span class="font-dancing">this is dancing</span>
            </li>
            <li>
              .font-basic:&nbsp;
              <span class="font-basic">this is basic</span>
            </li>
            <li>
              .font-cursive:&nbsp;
              <span class="font-cursive">this is cursive</span>
            </li>
            <li>
              .font-zapfino:&nbsp;
              <span class="font-zapfino">this is zapfino</span>
            </li>
            <li>
              .font-arizonia:&nbsp;
              <span class="font-arizonia">this is arizonia</span>
            </li>
            <li>
              .font-greatvibes:&nbsp;
              <span class="font-greatvibes">this is greatvibes</span>
            </li>
            <li>
              .font-giveyouglory:&nbsp;
              <span class="font-giveyouglory">this is giveyouglory</span>
            </li>
            <li>
              .font-cerdarville:&nbsp;
              <span class="font-cerdarville">this is cerdarville</span>
            </li>
            <li>
              .font-labelleaurore:&nbsp;
              <span class="font-labelleaurore">this is labelleaurore</span>
            </li>
            <li>
              .font-alexbrush:&nbsp;
              <span class="font-alexbrush">this is alexbrush</span>
            </li>
            <li>
              .font-overtherainbow:&nbsp;
              <span class="font-overtherainbow">this is overtherainbow</span>
            </li>
            <li>
              .font-badscript:&nbsp;
              <span class="font-badscript">this is badscript</span>
            </li>
            <li>
              .font-playball:&nbsp;
              <span class="font-playball">this is playball</span>
            </li>
            <li>
              .font-courgette:&nbsp;
              <span class="font-courgette">this is courgette</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="utility__unit">
      <span class="utility__unit__title"> Size </span>

      <div class="utility__unit__block">
        <span class="utility__unit__block__title"> width % </span>

        <div class="utility__unit__block__content">
          <ul>
            <li>
              .w-25:<br />
              <div class="bg-dark">
                <div
                  class="w-25 bg-primary align-center text-white"
                  style="height: 3rem"
                >
                  width 25%
                </div>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              .w-50:<br />
              <div class="bg-dark">
                <div
                  class="w-50 bg-primary align-center text-white"
                  style="height: 3rem"
                >
                  width 50%
                </div>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              .w-75:<br />
              <div class="bg-dark">
                <div
                  class="w-75 bg-primary align-center text-white"
                  style="height: 3rem"
                >
                  width 75%
                </div>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              .w-100:<br />
              <div class="bg-dark">
                <div
                  class="w-100 bg-primary align-center text-white"
                  style="height: 3rem"
                >
                  width 100%
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="utility__unit__block">
        <span class="utility__unit__block__title"> height % </span>

        <div class="utility__unit__block__content">
          <ul>
            <li>
              .h-25:<br />
              <div class="bg-dark" style="height: 3rem">
                <div class="h-25 bg-primary align-center text-white">
                  height 25%
                </div>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              .h-50:<br />
              <div class="bg-dark" style="height: 3rem">
                <div class="h-50 bg-primary align-center text-white">
                  height 50%
                </div>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              .h-75:<br />
              <div class="bg-dark" style="height: 3rem">
                <div class="h-75 bg-primary align-center text-white">
                  height 75%
                </div>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              .h-100:<br />
              <div class="bg-dark" style="height: 3rem">
                <div class="h-100 bg-primary align-center text-white">
                  height 100%
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="utility__unit__block">
        <span class="utility__unit__block__title"> width advanced </span>

        <div class="utility__unit__block__content">
          <ul>
            <li>.width-item { width: $item-width; }</li>
          </ul>
        </div>
      </div>

      <div class="utility__unit__block">
        <span class="utility__unit__block__title"> height advanced </span>

        <div class="utility__unit__block__content">
          <ul>
            <li>.height-1 { height: 1rem; }</li>
            <li>.height-2 { height: 2rem; }</li>
            <li>.height-3 { height: 3rem; }</li>
            <li>.height-305 { height: 3.5rem; }</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "~/../bib-shared/css/variables.scss";
@import "~/../bib-shared/css/colors.scss";
@import "~/../bib-shared/css/mixins.scss";

.utility {
  &__unit {
    margin: 1rem;
    padding: 1rem;
    background: $white;

    &__title {
      font-size: 1.5rem;
      color: $primary;
    }

    &__block {
      margin-top: 1rem;
      margin-bottom: 1rem;
      padding: 1rem;
      background: $white;
      border: dotted 1px gray;

      &__title {
        font-size: 1rem;
        color: $success;
      }

      &__content {
        margin-top: 1rem;
        margin-bottom: 1rem;
      }
    }
  }
}
</style>