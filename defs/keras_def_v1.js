let KerasModelDef = {}

KerasModelDef.keras_layer = {
	class_name: "Dense",
	name: "dense_",
	"inbound_nodes": [],
}

KerasModelDef.keras_args = {
	InputLayer: {
		help: "Input layer",
		color: "#00ff00",
		args: {
			"batch_input_shape": [ null, 299, 299, 3],
            "sparse": false,
            "input_dtype": "float32"
		}
	},
	Dense: {
		help: "Just your regular fully connected NN layer.",
		color: "#7f7f00",
		args: {
			output_dim: 1,
			init: "uniform",
			activation: "tanh",
			weights: "",
			W_regularizer: "l2(0.01)",
			b_regularizer: "l2(0.01)",
			activity_regularizer: "activity_l2(0.01)",
			W_constraint: "maxnorm(m=2)",
			b_constraint: "maxnorm(m=2)",
			bias: true,
			input_dim: 200
		}

	},

	Activation: {
		help: "Applies an activation function to an output.",
		color: "#ff5656",
		args: {
			activation: "tanh"
		}

	},

	Dropout: {
		help: "Applies Dropout to the input. Dropout consists in randomly setting a fraction p of input units to 0 at each update during training time, which helps prevent overfitting.",
		color: "#ff5656",
		args: {
			p: 0.5
		}

	},

	SpatialDropout2D: {
		help: "This version performs the same function as Dropout, however it drops entire 2D feature maps instead of individual elements. If adjacent pixels within feature maps are strongly correlated (as is normally the case in early convolution layers) then regular dropout will not regularize the activations and will otherwise just result in an effective learning rate decrease. In this case, SpatialDropout2D will help promote independence between feature maps and should be used instead.",
		color: "#ff5656",
		args: {
			p: 0.5,
			//dim_ordering: 'tf'
		}

	},
	SpatialDropout3D: {
		help: "This version performs the same function as Dropout, however it drops entire 3D feature maps instead of individual elements. If adjacent pixels within feature maps are strongly correlated (as is normally the case in early convolution layers) then regular dropout will not regularize the activations and will otherwise just result in an effective learning rate decrease. In this case, SpatialDropout#D will help promote independence between feature maps and should be used instead.",
		color: "#ff5656",
		args: {
			p: 0.5,
			//dim_ordering: 'tf'
		}

	},

	Permute: {
		help: "Permutes the dimensions of the input according to a given pattern. Useful for e.g. connecting RNNs and convnets together.",
		color: "#000",
		args: {
			dims: "(2, 1)"
		}

	},

	Reshape: {
		help: "Reshapes an output to a certain shape.",
		color: "#000",
		args: {

		}
	},

	Flatten: {
		help: "Flattens the input. Does not affect the batch size.",
		color: "#000",
		args: {

		}
	},

	RepeatVector:{
		help: "Repeats the input n times.",
		color: "#000",
		args: {
			n: 3
		}

	},

	Merge: {
		help: "A Merge layer can be used to merge a list of tensors into a single tensor, following some merge mode.",
		color: "#5fbf00",
		args: {
			layers: "[layer1, layer2]",
			mode: "sum",
			concat_axis: 2,
			dot_axes: "(tuple)",
			output_shape: "(tuple integers)",
			node_indices: "",
			tensor_indices: "",
			output_mask: ""
		}

	},

	ActivityRegularization: {
		help: "Layer that passes through its input unchanged, but applies an update to the cost function based on the activity.",
		color: "#000",
		args: {
			l1: 0.0,
			l2: 0.0
		}
	},


	Lambda: {
		help: "Used for evaluating an arbitrary Theano / TensorFlow expression on the output of the previous layer.",
		color: "#000",
		args: {
			"function": "",
			output_shape: "(input_shape[0], )",
			arguments: ""
		}

	},

	Masking: {
		help: "Masks an input sequence by using a mask value to identify timesteps to be skipped.",
		color: "#000",
		args: {
			mask_value: 0.0
		}
	},

	Highway: {
		help: "Densely connected highway network, a natural extension of LSTMs to feedforward networks.",
		color: "#000",
		args: {
			output_dim: 1,
			init: "uniform",
			activation: "tanh",
			weights: "",
			W_regularizer: "l2(0.01)",
			b_regularizer: "l2(0.01)",
			activity_regularizer: "activity_l2(0.01)",
			W_constraint: "maxnorm(m=2)",
			b_constraint: "maxnorm(m=2)",
			bias: true,
			input_dim: 200
		}

	},
	MaxoutDense: {
		help: "A MaxoutDense layer takes the element-wise maximum of nb_feature Dense(input_dim, output_dim) linear layers. This allows the layer to learn a convex, piecewise linear activation function over the inputs.",
		color: "#ff0000",
		args: {
			output_dim: 1,
			nb_feature: 2,
			init: "uniform",
			activation: "tanh",
			weights: "",
			W_regularizer: "l2(0.01)",
			b_regularizer: "l2(0.01)",
			activity_regularizer: "activity_l2(0.01)",
			W_constraint: "maxnorm(m=2)",
			b_constraint: "maxnorm(m=2)",
			bias: true,
			input_dim: 200
		}

	},
	TimeDistributedDense: {
		help: "Deprecated: use TimeDistributed",
		color: "#f00",
		args: {
			deprecated: "use TimeDistributed"
		}
	},

	Convolution1D: {
		help: "Convolution operator for filtering neighborhoods of one-dimensional inputs. When using this layer as the first layer in a model, either provide the keyword argument input_dim (int, e.g. 128 for sequences of 128-dimensional vectors), or input_shape (tuple of integers, e.g. (10, 128) for sequences of 10 vectors of 128-dimensional vectors).",
		color: "#005fbf",
		args: {
			nb_filter: 1,
			filter_length: "",
			border_mode: "valid",
			subsample_length: 300,
			init: "uniform",
			activation: "tanh",
			weights: "",
			W_regularizer: "l2(0.01)",
			b_regularizer: "l2(0.01)",
			activity_regularizer: "activity_l2(0.01)",
			W_constraint: "maxnorm(m=2)",
			b_constraint: "maxnorm(m=2)",
			bias: true,
			input_length: 300
		}

	},

	Convolution2D: {
		help: "Convolution operator for filtering windows of two-dimensional inputs. When using this layer as the first layer in a model, provide the keyword argument input_shape (tuple of integers, does not include the sample axis), e.g.  input_shape=(3, 128, 128) for 128x128 RGB pictures.",
		color: "#005fbf",
		args: {
			nb_filter: 1,
			nb_row: 200,
			nb_col: 200,
			filter_length: "",
			border_mode: "valid",
			subsample_length: 300,
			init: "uniform",
			activation: "tanh",
			weights: "",
			W_regularizer: "l2(0.01)",
			b_regularizer: "l2(0.01)",
			activity_regularizer: "activity_l2(0.01)",
			W_constraint: "maxnorm(m=2)",
			b_constraint: "maxnorm(m=2)",
			//dim_ordering: "tf",
			bias: true,
			input_length: 300
		}

	},

	Deconvolution2D: {
		help: "Transposed convolution operator for filtering windows of two-dimensional inputs. The need for transposed convolutions generally arises from the desire to use a transformation going in the opposite direction of a normal convolution, i.e., from something that has the shape of the output of some convolution to something that has the shape of its input while maintaining a connectivity pattern that is compatible with said convolution. ",
		color: "#005fbf",
		args: {
			nb_filter: 1,
			nb_row: 200,
			nb_col: 200,
			output_shape: "",
			border_mode: "valid",
			subsample: "",
			init: "uniform",
			activation: "tanh",
			weights: "",
			W_regularizer: "l2(0.01)",
			b_regularizer: "l2(0.01)",
			activity_regularizer: "activity_l2(0.01)",
			W_constraint: "maxnorm(m=2)",
			b_constraint: "maxnorm(m=2)",
			//dim_ordering: "tf",
			bias: true,
		}

	},

	Convolution3D: {
		help: "Convolution operator for filtering windows of three-dimensional inputs. When using this layer as the first layer in a model, provide the keyword argument input_shape (tuple of integers, does not include the sample axis), e.g.  input_shape=(3, 10, 128, 128) for 10 frames of 128x128 RGB pictures.",
		color: "#005fbf",
		args: {
			nb_filter: 1,
			kernel_dim1: 200,
			kernel_dim2: 200,
			kernel_dim3: 200,
			border_mode: "valid",
			subsample: "",
			init: "uniform",
			activation: "tanh",
			weights: "",
			W_regularizer: "l2(0.01)",
			b_regularizer: "l2(0.01)",
			activity_regularizer: "activity_l2(0.01)",
			W_constraint: "maxnorm(m=2)",
			b_constraint: "maxnorm(m=2)",
			//dim_ordering: "tf",
			bias: true
		}

	},

	Cropping1D: {
		help: "Cropping layer for 1D input (e.g. temporal sequence). It crops along the time dimension (axis 1).",
		color: "#ff5656",
		args: {
			cropping: "(1, 1)"
		}
	},

	Cropping2D: {
		help: "Cropping layer for 2D input (e.g. picture). It crops along spatial dimensions, i.e. width and height.",
		color: "#ff5656",
		args: {
			cropping: "((0, 0), (0, 0))",
			//dim_ordering: "tf"
		}
	},

	Cropping3D: {
		help: "Cropping layer for 3D data (e.g. spatial or saptio-temporal).",
		color: "#ff5656",
		args: {
			cropping: "((1, 1), (1, 1), (1, 1))",
			//dim_ordering: "tf"
		}
	},

	UpSampling1D: {
		help: "Repeat each temporal step length times along the time axis.",
		color: "#aaff56",
		args: {
			length: 2
		}
	},

	UpSampling2D: {
		help: "Repeat the rows and columns of the data by size[0] and size[1] respectively.",
		color: "#aaff56",
		args: {
			size: "(2, 2)",
			//dim_ordering: "tf"
		}
	},

	UpSampling3D: {
		help: "Repeat the first, second and third dimension of the data by size[0], size[1] and size[2] respectively.",
		color: "#aaff56",
		args: {
			size: "(2, 2, 2)",
			//dim_ordering: "tf"
		}
	},

	ZeroPadding1D: {
		help: "Zero-padding layer for 1D input (e.g. temporal sequence).",
		color: "#aaff56",
		args: {
			padding: "1"
		}
	},

	ZeroPadding2D: {
		help: "Zero-padding layer for 1D input (e.g. temporal sequence).",
		color: "#aaff56",
		args: {
			padding: "(1, 1)",
			//dim_ordering: "tf"
		}
	},

	ZeroPadding3D: {
		help: "Zero-padding layer for 3D data (spatial or spatio-temporal).",
		color: "#aaff56",
		args: {
			padding: "(1, 1, 1)",
			//dim_ordering: "tf"
		}
	},

	Bidirectional: {
		help: "Bidirectional wrapper for RNNs.",
		color: "#003f7f",
		args: {
			layer: "",
			merge_mode: "sum"
		}

	},

	"Embedding": {
		help: "Turn positive integers (indexes) into dense vectors of fixed size. eg. [[4], [20]] -> [[0.25, 0.1], [0.6, -0.2]] \nThis layer can only be used as the first layer in a model.",
		color: "#003f7f",
		args: {
			output_dim: 1,
			init: "uniform",
			activation: "tanh",
			weights: "",
			W_regularizer: "l2(0.01)",
			b_regularizer: "l2(0.01)",
			activity_regularizer: "activity_l2(0.01)",
			W_constraint: "maxnorm(m=2)",
			b_constraint: "maxnorm(m=2)",
			bias: true,
			input_dim: 200,
			mask_zero: false,
			dropout: 0.5
		}
	},

	MaxPooling1D: {
		help: "Max pooling operation for temporal data.",
		color: "#ff0000",
		args: {
			pool_size: "",
			strides: "",
			border_mode: 'valid'
		}
	},

	MaxPooling2D: {
		help: "Max pooling operation for 2D data.",
		color: "#ff0000",
		args: {
			pool_size: "",
			strides: "",
			border_mode: 'valid',
			//dim_ordering: "tf"
		}

	},

	MaxPooling3D: {
		help: "Max pooling operation for 3D data (spatial or spatio-temporal).",
		color: "#ff0000",
		args: {
			pool_size: "",
			strides: "",
			border_mode: 'valid',
			//dim_ordering: "tf"
		}

	},


	AveragePooling1D: {
		help: "Average pooling operation for temporal data.",
		color: "#ff0000",
		args: {
			pool_size: "",
			strides: "",
			border_mode: 'valid'
		}
	},


	AveragePooling2D: {
		help: "Average pooling operation for 2D data.",
		color: "#ff0000",
		args: {
			pool_size: "",
			strides: "",
			border_mode: 'valid',
			//dim_ordering: "tf"
		}
	},

	AveragePooling3D: {
		help: "Average pooling operation for 3D data (spatial or spatio-temporal).",
		color: "#ff0000",
		args: {
			pool_size: "",
			strides: "",
			border_mode: 'valid',
			//dim_ordering: "tf"
		}
	},

	GlobalMaxPooling1D: {
		help: "Global max pooling operation for temporal data.",
		color: "#ff0000",
		args: {
		}
	},

	GlobalAveragePooling1D: {
		help: "Global average pooling operation for temporal data.",
		color: "#ff0000",
		args: {
		}
	},

	GlobalMaxPooling2D: {
		help: "Global max pooling operation for spatial data.",
		color: "#ff0000",
		args: {
			//dim_ordering: "tf"
		}
	},

	GlobalAveragePooling2D: {
		help: "Global average pooling operation for spatial data.",
		color: "#ff0000",
		args: {
			//dim_ordering: "tf"
		}
	},

	LocallyConnected1D: {
		help: "The LocallyConnected1D layer works similarly to the Convolution1D layer, except that weights are unshared, that is, a different set of filters is applied at each different patch of the input. When using this layer as the first layer in a model, either provide the keyword argument input_dim (int, e.g. 128 for sequences of 128-dimensional vectors), or input_shape (tuple of integers, e.g. input_shape=(10, 128) for sequences of 10 vectors of 128-dimensional vectors). Also, note that this layer can only be used with a fully-specified input shape (None dimensions not allowed).",
		color: "#7f7f00",
		args: {
			nb_filter: 1,
			filter_length: "",
			input_dim: 1,
			init: "uniform",
			activation: "tanh",
			weights: "",
			subsample_length: "",
			W_regularizer: "l2(0.01)",
			b_regularizer: "l2(0.01)",
			activity_regularizer: "activity_l2(0.01)",
			W_constraint: "maxnorm(m=2)",
			b_constraint: "maxnorm(m=2)",
			bias: true,
			input_dim: 200,
			input_length: "None"
		}
	},

	LocallyConnected2D: {
		help: "The LocallyConnected1D layer works similarly to the Convolution1D layer, except that weights are unshared, that is, a different set of filters is applied at each different patch of the input. When using this layer as the first layer in a model, either provide the keyword argument input_dim (int, e.g. 128 for sequences of 128-dimensional vectors), or input_shape (tuple of integers, e.g. input_shape=(10, 128) for sequences of 10 vectors of 128-dimensional vectors). Also, note that this layer can only be used with a fully-specified input shape (None dimensions not allowed).",
		color: "#7f7f00",
		args: {
			nb_filter: 1,
			nb_row: 1,
			nb_col: 1,
			filter_length: "",
			input_dim: 1,
			init: "uniform",
			activation: "tanh",
			weights: "",
			subsample_length: "",
			W_regularizer: "l2(0.01)",
			b_regularizer: "l2(0.01)",
			activity_regularizer: "activity_l2(0.01)",
			W_constraint: "maxnorm(m=2)",
			b_constraint: "maxnorm(m=2)",
			bias: true,
			//dim_ordering: "tf"
		}
	},











	SimpleRNN: {
		help: "Fully-connected RNN where the output is to be fed back to input.",
		color: "#003f7f",
		args: {
			output_dim: 200,
			init: "uniform",
			inner_init: "uniform",
			activation: "tanh",
			W_regularizer: "l2(0.01)",
			U_regularizer: "l2(0.01)",
			b_regularizer: "l2(0.01)",
			dropout_W: 0.5,
			dropout_U: 0.5
		}

	},
	GRU: {
		help: "Gated Recurrent Unit - Cho et al. 2014.",
		color: "#003f7f",
		args: {
			output_dim: 200,
			init: "uniform",
			inner_init: "uniform",
			activation: "tanh",
			inner_activation: "tanh",
			W_regularizer: "l2(0.01)",
			U_regularizer: "l2(0.01)",
			b_regularizer: "l2(0.01)",
			dropout_W: 0.5,
			dropout_U: 0.5
		}

	},
	LSTM: {
		help: "Long-Short Term Memory unit - Hochreiter 1997.",
		color: "#003f7f",
		args: {
			output_dim: 200,
			init: "uniform",
			inner_init: "uniform",
			forget_bias_init: "uniform",
			activation: "tanh",
			inner_activation: "tanh",
			W_regularizer: "l2(0.01)",
			U_regularizer: "l2(0.01)",
			b_regularizer: "l2(0.01)",
			dropout_W: 0.5,
			dropout_U: 0.5
		}

	},

	BatchNormalization: {
		help: "Normalize the activations of the previous layer at each batch, i.e. applies a transformation that maintains the mean activation close to 0 and the activation standard deviation close to 1.",
		color: "#003f7f",
		args: {
			epsilon: 0.01,
			mode: 0,
			axis: 1,
			momentum: 0.1,
			weights: "",
			beta_init: "uniform",
			gamma_init: "uniform",
			gamma_regularizer: "l2(0.01)",
			beta_regularizer: "l2(0.01)"
		}

	},

	SeparableConvolution2D: {
		help: "Separable convolution operator for 2D inputs. \n Separable convolutions consist in first performing a depthwise spatial convolution (which acts on each input channel separately) followed by a pointwise convolution which mixes together the resulting output channels. The  depth_multiplier argument controls how many output channels are generated per input channel in the depthwise step. \n Intuitively, separable convolutions can be understood as a way to factorize a convolution kernel into two smaller kernels, or as an extreme version of an Inception block.",
		color: "#007fff",
		args: {
			nb_filter: 1,
			nb_row: 2,
			nb_col: 2,
			init: "uniform",
			activation: "tanh",
			weights: "",
			border_mode: 'valid',
			subsample: "",
			depth_multiplier: "",
			depthwise_regularizer: "l2(0.01)",
			pointwise_regularizer: "l2(0.01)",
			b_regularizer: "l2(0.01)",
			activity_regularizer: "l2(0.01)",
			depthwise_constraint: "",
			pointwise_constraint: "",
			b_constraint: "",
			//dim_ordering: "tf",
			bias: false
		}

	},

	TimeDistributed: {
		help: "This wrapper allows to apply a layer to every temporal slice of an input. The input should be at least 3D, and the dimension of index one will be considered to be the temporal dimension. \nConsider a batch of 32 samples, where each sample is a sequence of 10 vectors of 16 dimensions. The batch input shape of the layer is then (32, 10, 16) (and the input_shape, not including the samples dimension, is  (10, 16)).",
		color: "#003f7f",
		args: {
			layer: ""
		}
	},



	GlobalAveragePooling2D: {
		help: "Global average pooling operation for spatial data.",
		color: "#000",
		args: {
			//dim_ordering: "tf",
		}

	},

	LeakyReLU: {
		help: "Special version of a Rectified Linear Unit that allows a small gradient when the unit is not active: f(x) = alpha * x for x < 0, f(x) = x for x >= 0.",
		color: "#003f7f",
		args: {
			alpha: 0.0
		}
	},

	PReLU: {
		help: "Parametric Rectified Linear Unit: f(x) = alphas * x for x < 0, f(x) = x for x >= 0, where alphas is a learned array with the same shape as x.",
		color: "#003f7f",
		args: {
			init: "uniform",
			weights: ""
		}
	},

	ELU: {
		help: "Exponential Linear Unit: f(x) =  alpha * (exp(x) - 1.) for x < 0, f(x) = x for x >= 0.",
		color: "#003f7f",
		args: {
			alpha: 1
		}
	},

	ParametricSoftplus: {
		help: "Parametric Softplus: alpha * log(1 + exp(beta * x))",
		color: "#003f7f",
		args: {
			alpha_init: 0.5,
			beta_init: 0.5,
			weights: ""
		}
	},

	ThresholdedReLU: {
		help: "Thresholded Rectified Linear Unit: f(x) = x for x > theta f(x) = 0 otherwise.",
		color: "#003f7f",
		args: {
			theta: 0.5
		}
	},

	SReLU: {
		help: "S-shaped Rectified Linear Unit.",
		color: "#003f7f",
		args: {
			t_left_init: "uniform",
			a_left_init: "uniform",
			t_right_init: "uniform",
			a_right_init: "uniform"
		}
	},

	GaussianNoise: {
		help: "Apply to the input an additive zero-centered Gaussian noise with standard deviation sigma. This is useful to mitigate overfitting (you could see it as a kind of random data augmentation). Gaussian Noise (GS) is a natural choice as corruption process for real valued inputs. \nAs it is a regularization layer, it is only active at training time.",
		color: "#ffaaff",
		args: {
			sigma: 0.5
		}
	},

	GaussianDropout: {
		help: "Apply to the input an multiplicative one-centered Gaussian noise with standard deviation sqrt(p/(1-p)). \nAs it is a regularization layer, it is only active at training time.",
		color: "#ffaaff",
		args: {
			p: 0.5
		}
	},




	"SGD": {
		help: "Stochastic gradient descent, with support for momentum, learning rate decay, and Nesterov momentum.",
		color: "#000",
		args: {
			lr: 0.1,
			momentum: 0.9,
			decay: 0.9,
			nesterov: false
		}
	},


	"RMSprop": {
		help: "It is recommended to leave the parameters of this optimizer at their default values (except the learning rate, which can be freely tuned). This optimizer is usually a good choice for recurrent neural networks.",
		color: "#000",
		args: {
			lr: 0.1,
			rho: 0.9,
			decay: 0.005,
			epsilon: 0.0001
		}
	},


	"Adagrad": {
		help: "Adagrad optimizer. It is recommended to leave the parameters of this optimizer at their default values.",
		color: "#000",
		args: {
			lr: 0.01,
			epsilon: 1e-08,
			decay: 0.0
		}
	},


	"Adadelta": {
		help: "Adadelta optimizer. It is recommended to leave the parameters of this optimizer at their default values.",
		color: "#000",
		args: {
			lr: 1.0,
			rho: 0.95,
			epsilon: 1e-08,
			decay: 0.0
		}
	},


	"Adam": {
		help: "Adam optimizer. Default parameters follow those provided in the original paper.",
		color: "#000",
		args: {
			lr: 0.001,
			beta_1: 0.9,
			beta_2: 0.999,
			epsilon: 1e-08,
			decay: 0.0
		}
	},


	"Adamax": {
		help: "Adamax optimizer from Adam paper's Section 7. It is a variant of Adam based on the infinity norm. Default parameters follow those provided in the paper.",
		color: "#000",
		args: {
			lr: 0.002,
			beta_1: 0.9,
			beta_2: 0.999,
			epsilon: 1e-08,
			decay: 0.0
		}
	},


	"Nadam": {
		help: "Nesterov Adam optimizer: Much like Adam is essentially RMSprop with momentum, Nadam is Adam RMSprop with Nesterov momentum. Default parameters follow those provided in the paper. It is recommended to leave the parameters of this optimizer at their default values.",
		color: "#000",
		args: {
			lr: 0.002,
			beta_1: 0.9,
			beta_2: 0.999,
			epsilon: 1e-08,
			schedule_decay: 0.004
		}
	},


	"TFOptimizer": {
		help: "TensorFlow Optimizer.",
		color: "#000",
		args: {
			optimizer: ""
		}
	},

	Model: {
		help: "Keras sequential model.",
		color: "#00f",
		args: {
			optimizer: "sgd",
			loss: "mean_squared_error",
			metrics: "",
			sample_weight_mode: "None"
		}
	},

	Sequential: {
		help: "Keras sequential model.",
		color: "#00f",
		args: {
			optimizer: "sgd",
			loss: "mean_squared_error",
			metrics: "",
			sample_weight_mode: "None"
		}
	}










}

module.exports = KerasModelDef;
