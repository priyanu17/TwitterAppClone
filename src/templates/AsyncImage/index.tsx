import React, {useState, FC, Fragment} from 'react';
import {ActivityIndicator, Image, StyleSheet, View} from 'react-native';
import FastImage, {FastImageProps} from 'react-native-fast-image';
import {Sizes} from '../../utils/constants/Sizes';
import {isNonEmptyString} from '../../utils/helper';
import {Colors} from '../../utils/constants/Colors';

type ImageMode = 'cover' | 'contain' | 'stretch' | 'center';
type FastImagePriority = 'low' | 'normal' | 'high';

interface IFastImage extends Omit<FastImageProps, 'source'> {
  targetURL: string;
  allowDynamicSizing?: boolean;
  resizeMode?: ImageMode;
  priority?: FastImagePriority;
  style: {};
  showLoadingAnimation?: boolean;
}

const getResizeMode = (mode: ImageMode) => {
  switch (mode) {
    case 'cover':
      return FastImage.resizeMode.cover;
    case 'contain':
      return FastImage.resizeMode.contain;
    case 'stretch':
      return FastImage.resizeMode.stretch;
    case 'center':
      return FastImage.resizeMode.center;
    default:
      return FastImage.resizeMode.cover;
  }
};

/**
 * Use this component to load image over a url,
 * use Image component from "react-native" package to show local image
 *
 * Documentation: https://github.com/DylanVann/react-native-fast-image
 */
const AsyncImage: FC<IFastImage> = ({
  /**
   *  url of of the image
   */
  targetURL,
  /**
   * resize mode : Can contain any one of the four values
   * 1. contain - Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height) of the image will be equal to or less than the corresponding dimension of the view (minus padding).
   * 2. cover   - Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height) of the image will be equal to or larger than the corresponding dimension of the view (minus padding).
   * 3. stretch - Scale width and height independently, This may change the aspect ratio of the src.
   * 4. center  - Do not scale the image, keep centered.
   *
   * @default value is contain
   */
  resizeMode = 'contain',
  /**
   * Contain any one of the value
   * 1. FastImage.priority.low
   * 2. FastImage.priority.normal
   * 3. FastImage.priority.high
   *
   * @default value is FastImage.priority.normal
   */
  priority = FastImage.priority.high,
  /**
   * image style
   */
  style,
  /**
   * prop to control visibility of the loading animation
   */
  showLoadingAnimation = true,
  ...props
}) => {
  const placeholderImage = require('../../assets/PlaceholderImage.png');
  const [isImageLoadComplete, setIsImageLoadComplete] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);

  const [imageLoadError, setImageLoadError] = useState(false);

  const servePlaceHolderImageComponent = () => {
    return <Image style={[style]} source={placeholderImage} />;
  };
  const serveLoadingImageComponent = () => {
    return (
      <View
        style={{
          ...style,
          ...styles.loadingIndicatorContainer,
        }}>
        <ActivityIndicator color={Colors.black} />
      </View>
    );
  };

  const beginLoadingAsyncImage = () => {
    const imageFetchData = {
      uri: targetURL,
      priority,
    };

    return (
      <FastImage
        style={style}
        source={imageFetchData}
        resizeMode={getResizeMode(resizeMode)}
        onLoadStart={() => {
          setImageLoadError(false);
        }}
        onLoad={_dimensions => {
          if (!isImageLoadComplete) {
            setIsImageLoadComplete(true);
            setIsImageLoading(false);
          }
        }}
        onError={() => {
          setIsImageLoadComplete(false);
          setIsImageLoading(false);
          setImageLoadError(true);
          console.log('image loading error', imageFetchData);
        }}
        {...props}
      />
    );
  };

  return (
    <>
      {/* fallback image and loader is showing below actual image  */}
      {isNonEmptyString(targetURL) ? (
        <Fragment>
          {/* in case of image loading */}
          {showLoadingAnimation && isImageLoading && !isImageLoadComplete
            ? serveLoadingImageComponent()
            : null}
          {/* In case of image loading failed */}
          {isImageLoadComplete || isImageLoading
            ? null
            : servePlaceHolderImageComponent()}
          {/* image loaded successfully -> there is no image error*/}
          {!imageLoadError ? beginLoadingAsyncImage() : null}
        </Fragment>
      ) : (
        servePlaceHolderImageComponent()
      )}
    </>
  );
};

const styles = StyleSheet.create({
  loadingIndicatorContainer: {
    position: 'absolute',
    padding: Sizes.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AsyncImage;
