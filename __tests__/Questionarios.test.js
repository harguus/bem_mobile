import 'react-native';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import Questionarios from '../views/ListaQuestionarios';
import Preloading from '../components/Preloading';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const ques = renderer.create(<Questionarios />);
    const PreloadingRendered = ques.root.findByType(Preloading)
    const ActivityIndicatorRendered = PreloadingRendered.findByType(ActivityIndicator);
    expect(ActivityIndicatorRendered).toBeTruthy();
});
