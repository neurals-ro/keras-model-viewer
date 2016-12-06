var keras_ex1 = {
    "class_name": "Sequential",
    "config": {
        "input_layers": [
            [
                "input_1",
                0,
                0
            ]
        ],
        "layers": [
            {
                "class_name": "InputLayer",
                "config": {
                    "batch_input_shape": [
                        null,
                        299,
                        299,
                        3
                    ],
                    "sparse": false,
                    "input_dtype": "float32",
                    "name": "input_1"
                },
                "name": "input_1",
                "inbound_nodes": []
            },
            {
                "class_name": "Convolution2D",
                "config": {
                    "W_constraint": null,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        2,
                        2
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 3,
                    "W_regularizer": null,
                    "nb_filter": 32,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 3,
                    "name": "block1_conv1",
                    "border_mode": "valid",
                    "b_regularizer": null,
                    "activity_regularizer": null,
                    "b_constraint": null
                },
                "name": "block1_conv1",
                "inbound_nodes": [
                    [
                        [
                            "input_1",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "block1_conv1_bn",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "block1_conv1_bn",
                "inbound_nodes": [
                    [
                        [
                            "block1_conv1",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Activation",
                "config": {
                    "activation": "relu",
                    "trainable": true,
                    "name": "block1_conv1_act"
                },
                "name": "block1_conv1_act",
                "inbound_nodes": [
                    [
                        [
                            "block1_conv1_bn",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Convolution2D",
                "config": {
                    "W_constraint": null,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        1,
                        1
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 3,
                    "W_regularizer": null,
                    "nb_filter": 64,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 3,
                    "name": "block1_conv2",
                    "border_mode": "valid",
                    "b_regularizer": null,
                    "activity_regularizer": null,
                    "b_constraint": null
                },
                "name": "block1_conv2",
                "inbound_nodes": [
                    [
                        [
                            "block1_conv1_act",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "block1_conv2_bn",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "block1_conv2_bn",
                "inbound_nodes": [
                    [
                        [
                            "block1_conv2",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Activation",
                "config": {
                    "activation": "relu",
                    "trainable": true,
                    "name": "block1_conv2_act"
                },
                "name": "block1_conv2_act",
                "inbound_nodes": [
                    [
                        [
                            "block1_conv2_bn",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "SeparableConvolution2D",
                "config": {
                    "b_constraint": null,
                    "depth_multiplier": 1,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        1,
                        1
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 3,
                    "pointwise_constraint": null,
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null,
                    "pointwise_regularizer": null,
                    "nb_filter": 128,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 3,
                    "name": "block2_sepconv1",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null
                },
                "name": "block2_sepconv1",
                "inbound_nodes": [
                    [
                        [
                            "block1_conv2_act",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "block2_sepconv1_bn",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "block2_sepconv1_bn",
                "inbound_nodes": [
                    [
                        [
                            "block2_sepconv1",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Activation",
                "config": {
                    "activation": "relu",
                    "trainable": true,
                    "name": "block2_sepconv2_act"
                },
                "name": "block2_sepconv2_act",
                "inbound_nodes": [
                    [
                        [
                            "block2_sepconv1_bn",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "SeparableConvolution2D",
                "config": {
                    "b_constraint": null,
                    "depth_multiplier": 1,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        1,
                        1
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 3,
                    "pointwise_constraint": null,
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null,
                    "pointwise_regularizer": null,
                    "nb_filter": 128,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 3,
                    "name": "block2_sepconv2",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null
                },
                "name": "block2_sepconv2",
                "inbound_nodes": [
                    [
                        [
                            "block2_sepconv2_act",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "block2_sepconv2_bn",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "block2_sepconv2_bn",
                "inbound_nodes": [
                    [
                        [
                            "block2_sepconv2",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Convolution2D",
                "config": {
                    "W_constraint": null,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        2,
                        2
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 1,
                    "W_regularizer": null,
                    "nb_filter": 128,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 1,
                    "name": "convolution2d_1",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null,
                    "b_constraint": null
                },
                "name": "convolution2d_1",
                "inbound_nodes": [
                    [
                        [
                            "block1_conv2_act",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "MaxPooling2D",
                "config": {
                    "trainable": true,
                    "pool_size": [
                        3,
                        3
                    ],
                    "dim_ordering": "tf",
                    "border_mode": "same",
                    "name": "block2_pool",
                    "strides": [
                        2,
                        2
                    ]
                },
                "name": "block2_pool",
                "inbound_nodes": [
                    [
                        [
                            "block2_sepconv2_bn",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "batchnormalization_1",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "batchnormalization_1",
                "inbound_nodes": [
                    [
                        [
                            "convolution2d_1",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Merge",
                "config": {
                    "dot_axes": -1,
                    "name": "merge_1",
                    "mode": "sum",
                    "output_shape": null,
                    "output_shape_type": "raw",
                    "concat_axis": -1,
                    "mode_type": "raw"
                },
                "name": "merge_1",
                "inbound_nodes": [
                    [
                        [
                            "block2_pool",
                            0,
                            0
                        ],
                        [
                            "batchnormalization_1",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Activation",
                "config": {
                    "activation": "relu",
                    "trainable": true,
                    "name": "block3_sepconv1_act"
                },
                "name": "block3_sepconv1_act",
                "inbound_nodes": [
                    [
                        [
                            "merge_1",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "SeparableConvolution2D",
                "config": {
                    "b_constraint": null,
                    "depth_multiplier": 1,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        1,
                        1
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 3,
                    "pointwise_constraint": null,
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null,
                    "pointwise_regularizer": null,
                    "nb_filter": 256,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 3,
                    "name": "block3_sepconv1",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null
                },
                "name": "block3_sepconv1",
                "inbound_nodes": [
                    [
                        [
                            "block3_sepconv1_act",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "block3_sepconv1_bn",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "block3_sepconv1_bn",
                "inbound_nodes": [
                    [
                        [
                            "block3_sepconv1",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Activation",
                "config": {
                    "activation": "relu",
                    "trainable": true,
                    "name": "block3_sepconv2_act"
                },
                "name": "block3_sepconv2_act",
                "inbound_nodes": [
                    [
                        [
                            "block3_sepconv1_bn",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "SeparableConvolution2D",
                "config": {
                    "b_constraint": null,
                    "depth_multiplier": 1,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        1,
                        1
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 3,
                    "pointwise_constraint": null,
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null,
                    "pointwise_regularizer": null,
                    "nb_filter": 256,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 3,
                    "name": "block3_sepconv2",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null
                },
                "name": "block3_sepconv2",
                "inbound_nodes": [
                    [
                        [
                            "block3_sepconv2_act",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "block3_sepconv2_bn",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "block3_sepconv2_bn",
                "inbound_nodes": [
                    [
                        [
                            "block3_sepconv2",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Convolution2D",
                "config": {
                    "W_constraint": null,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        2,
                        2
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 1,
                    "W_regularizer": null,
                    "nb_filter": 256,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 1,
                    "name": "convolution2d_2",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null,
                    "b_constraint": null
                },
                "name": "convolution2d_2",
                "inbound_nodes": [
                    [
                        [
                            "merge_1",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "MaxPooling2D",
                "config": {
                    "trainable": true,
                    "pool_size": [
                        3,
                        3
                    ],
                    "dim_ordering": "tf",
                    "border_mode": "same",
                    "name": "block3_pool",
                    "strides": [
                        2,
                        2
                    ]
                },
                "name": "block3_pool",
                "inbound_nodes": [
                    [
                        [
                            "block3_sepconv2_bn",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "batchnormalization_2",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "batchnormalization_2",
                "inbound_nodes": [
                    [
                        [
                            "convolution2d_2",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Merge",
                "config": {
                    "dot_axes": -1,
                    "name": "merge_2",
                    "mode": "sum",
                    "output_shape": null,
                    "output_shape_type": "raw",
                    "concat_axis": -1,
                    "mode_type": "raw"
                },
                "name": "merge_2",
                "inbound_nodes": [
                    [
                        [
                            "block3_pool",
                            0,
                            0
                        ],
                        [
                            "batchnormalization_2",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Activation",
                "config": {
                    "activation": "relu",
                    "trainable": true,
                    "name": "block4_sepconv1_act"
                },
                "name": "block4_sepconv1_act",
                "inbound_nodes": [
                    [
                        [
                            "merge_2",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "SeparableConvolution2D",
                "config": {
                    "b_constraint": null,
                    "depth_multiplier": 1,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        1,
                        1
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 3,
                    "pointwise_constraint": null,
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null,
                    "pointwise_regularizer": null,
                    "nb_filter": 728,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 3,
                    "name": "block4_sepconv1",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null
                },
                "name": "block4_sepconv1",
                "inbound_nodes": [
                    [
                        [
                            "block4_sepconv1_act",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "block4_sepconv1_bn",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "block4_sepconv1_bn",
                "inbound_nodes": [
                    [
                        [
                            "block4_sepconv1",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Activation",
                "config": {
                    "activation": "relu",
                    "trainable": true,
                    "name": "block4_sepconv2_act"
                },
                "name": "block4_sepconv2_act",
                "inbound_nodes": [
                    [
                        [
                            "block4_sepconv1_bn",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "SeparableConvolution2D",
                "config": {
                    "b_constraint": null,
                    "depth_multiplier": 1,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        1,
                        1
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 3,
                    "pointwise_constraint": null,
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null,
                    "pointwise_regularizer": null,
                    "nb_filter": 728,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 3,
                    "name": "block4_sepconv2",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null
                },
                "name": "block4_sepconv2",
                "inbound_nodes": [
                    [
                        [
                            "block4_sepconv2_act",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "block4_sepconv2_bn",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "block4_sepconv2_bn",
                "inbound_nodes": [
                    [
                        [
                            "block4_sepconv2",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Convolution2D",
                "config": {
                    "W_constraint": null,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        2,
                        2
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 1,
                    "W_regularizer": null,
                    "nb_filter": 728,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 1,
                    "name": "convolution2d_3",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null,
                    "b_constraint": null
                },
                "name": "convolution2d_3",
                "inbound_nodes": [
                    [
                        [
                            "merge_2",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "MaxPooling2D",
                "config": {
                    "trainable": true,
                    "pool_size": [
                        3,
                        3
                    ],
                    "dim_ordering": "tf",
                    "border_mode": "same",
                    "name": "block4_pool",
                    "strides": [
                        2,
                        2
                    ]
                },
                "name": "block4_pool",
                "inbound_nodes": [
                    [
                        [
                            "block4_sepconv2_bn",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "batchnormalization_3",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "batchnormalization_3",
                "inbound_nodes": [
                    [
                        [
                            "convolution2d_3",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Merge",
                "config": {
                    "dot_axes": -1,
                    "name": "merge_3",
                    "mode": "sum",
                    "output_shape": null,
                    "output_shape_type": "raw",
                    "concat_axis": -1,
                    "mode_type": "raw"
                },
                "name": "merge_3",
                "inbound_nodes": [
                    [
                        [
                            "block4_pool",
                            0,
                            0
                        ],
                        [
                            "batchnormalization_3",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Activation",
                "config": {
                    "activation": "relu",
                    "trainable": true,
                    "name": "block5_sepconv1_act"
                },
                "name": "block5_sepconv1_act",
                "inbound_nodes": [
                    [
                        [
                            "merge_3",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "SeparableConvolution2D",
                "config": {
                    "b_constraint": null,
                    "depth_multiplier": 1,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        1,
                        1
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 3,
                    "pointwise_constraint": null,
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null,
                    "pointwise_regularizer": null,
                    "nb_filter": 728,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 3,
                    "name": "block5_sepconv1",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null
                },
                "name": "block5_sepconv1",
                "inbound_nodes": [
                    [
                        [
                            "block5_sepconv1_act",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "block5_sepconv1_bn",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "block5_sepconv1_bn",
                "inbound_nodes": [
                    [
                        [
                            "block5_sepconv1",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Activation",
                "config": {
                    "activation": "relu",
                    "trainable": true,
                    "name": "block5_sepconv2_act"
                },
                "name": "block5_sepconv2_act",
                "inbound_nodes": [
                    [
                        [
                            "block5_sepconv1_bn",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "SeparableConvolution2D",
                "config": {
                    "b_constraint": null,
                    "depth_multiplier": 1,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        1,
                        1
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 3,
                    "pointwise_constraint": null,
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null,
                    "pointwise_regularizer": null,
                    "nb_filter": 728,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 3,
                    "name": "block5_sepconv2",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null
                },
                "name": "block5_sepconv2",
                "inbound_nodes": [
                    [
                        [
                            "block5_sepconv2_act",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "block5_sepconv2_bn",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "block5_sepconv2_bn",
                "inbound_nodes": [
                    [
                        [
                            "block5_sepconv2",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Activation",
                "config": {
                    "activation": "relu",
                    "trainable": true,
                    "name": "block5_sepconv3_act"
                },
                "name": "block5_sepconv3_act",
                "inbound_nodes": [
                    [
                        [
                            "block5_sepconv2_bn",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "SeparableConvolution2D",
                "config": {
                    "b_constraint": null,
                    "depth_multiplier": 1,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        1,
                        1
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 3,
                    "pointwise_constraint": null,
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null,
                    "pointwise_regularizer": null,
                    "nb_filter": 728,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 3,
                    "name": "block5_sepconv3",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null
                },
                "name": "block5_sepconv3",
                "inbound_nodes": [
                    [
                        [
                            "block5_sepconv3_act",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "block5_sepconv3_bn",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "block5_sepconv3_bn",
                "inbound_nodes": [
                    [
                        [
                            "block5_sepconv3",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Merge",
                "config": {
                    "dot_axes": -1,
                    "name": "merge_4",
                    "mode": "sum",
                    "output_shape": null,
                    "output_shape_type": "raw",
                    "concat_axis": -1,
                    "mode_type": "raw"
                },
                "name": "merge_4",
                "inbound_nodes": [
                    [
                        [
                            "block5_sepconv3_bn",
                            0,
                            0
                        ],
                        [
                            "merge_3",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Activation",
                "config": {
                    "activation": "relu",
                    "trainable": true,
                    "name": "block6_sepconv1_act"
                },
                "name": "block6_sepconv1_act",
                "inbound_nodes": [
                    [
                        [
                            "merge_4",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "SeparableConvolution2D",
                "config": {
                    "b_constraint": null,
                    "depth_multiplier": 1,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        1,
                        1
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 3,
                    "pointwise_constraint": null,
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null,
                    "pointwise_regularizer": null,
                    "nb_filter": 728,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 3,
                    "name": "block6_sepconv1",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null
                },
                "name": "block6_sepconv1",
                "inbound_nodes": [
                    [
                        [
                            "block6_sepconv1_act",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "block6_sepconv1_bn",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "block6_sepconv1_bn",
                "inbound_nodes": [
                    [
                        [
                            "block6_sepconv1",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Activation",
                "config": {
                    "activation": "relu",
                    "trainable": true,
                    "name": "block6_sepconv2_act"
                },
                "name": "block6_sepconv2_act",
                "inbound_nodes": [
                    [
                        [
                            "block6_sepconv1_bn",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "SeparableConvolution2D",
                "config": {
                    "b_constraint": null,
                    "depth_multiplier": 1,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        1,
                        1
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 3,
                    "pointwise_constraint": null,
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null,
                    "pointwise_regularizer": null,
                    "nb_filter": 728,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 3,
                    "name": "block6_sepconv2",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null
                },
                "name": "block6_sepconv2",
                "inbound_nodes": [
                    [
                        [
                            "block6_sepconv2_act",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "block6_sepconv2_bn",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "block6_sepconv2_bn",
                "inbound_nodes": [
                    [
                        [
                            "block6_sepconv2",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Activation",
                "config": {
                    "activation": "relu",
                    "trainable": true,
                    "name": "block6_sepconv3_act"
                },
                "name": "block6_sepconv3_act",
                "inbound_nodes": [
                    [
                        [
                            "block6_sepconv2_bn",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "SeparableConvolution2D",
                "config": {
                    "b_constraint": null,
                    "depth_multiplier": 1,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        1,
                        1
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 3,
                    "pointwise_constraint": null,
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null,
                    "pointwise_regularizer": null,
                    "nb_filter": 728,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 3,
                    "name": "block6_sepconv3",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null
                },
                "name": "block6_sepconv3",
                "inbound_nodes": [
                    [
                        [
                            "block6_sepconv3_act",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "block6_sepconv3_bn",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "block6_sepconv3_bn",
                "inbound_nodes": [
                    [
                        [
                            "block6_sepconv3",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Merge",
                "config": {
                    "dot_axes": -1,
                    "name": "merge_5",
                    "mode": "sum",
                    "output_shape": null,
                    "output_shape_type": "raw",
                    "concat_axis": -1,
                    "mode_type": "raw"
                },
                "name": "merge_5",
                "inbound_nodes": [
                    [
                        [
                            "block6_sepconv3_bn",
                            0,
                            0
                        ],
                        [
                            "merge_4",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Activation",
                "config": {
                    "activation": "relu",
                    "trainable": true,
                    "name": "block7_sepconv1_act"
                },
                "name": "block7_sepconv1_act",
                "inbound_nodes": [
                    [
                        [
                            "merge_5",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "SeparableConvolution2D",
                "config": {
                    "b_constraint": null,
                    "depth_multiplier": 1,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        1,
                        1
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 3,
                    "pointwise_constraint": null,
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null,
                    "pointwise_regularizer": null,
                    "nb_filter": 728,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 3,
                    "name": "block7_sepconv1",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null
                },
                "name": "block7_sepconv1",
                "inbound_nodes": [
                    [
                        [
                            "block7_sepconv1_act",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "block7_sepconv1_bn",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "block7_sepconv1_bn",
                "inbound_nodes": [
                    [
                        [
                            "block7_sepconv1",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Activation",
                "config": {
                    "activation": "relu",
                    "trainable": true,
                    "name": "block7_sepconv2_act"
                },
                "name": "block7_sepconv2_act",
                "inbound_nodes": [
                    [
                        [
                            "block7_sepconv1_bn",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "SeparableConvolution2D",
                "config": {
                    "b_constraint": null,
                    "depth_multiplier": 1,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        1,
                        1
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 3,
                    "pointwise_constraint": null,
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null,
                    "pointwise_regularizer": null,
                    "nb_filter": 728,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 3,
                    "name": "block7_sepconv2",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null
                },
                "name": "block7_sepconv2",
                "inbound_nodes": [
                    [
                        [
                            "block7_sepconv2_act",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "block7_sepconv2_bn",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "block7_sepconv2_bn",
                "inbound_nodes": [
                    [
                        [
                            "block7_sepconv2",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Activation",
                "config": {
                    "activation": "relu",
                    "trainable": true,
                    "name": "block7_sepconv3_act"
                },
                "name": "block7_sepconv3_act",
                "inbound_nodes": [
                    [
                        [
                            "block7_sepconv2_bn",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "SeparableConvolution2D",
                "config": {
                    "b_constraint": null,
                    "depth_multiplier": 1,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        1,
                        1
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 3,
                    "pointwise_constraint": null,
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null,
                    "pointwise_regularizer": null,
                    "nb_filter": 728,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 3,
                    "name": "block7_sepconv3",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null
                },
                "name": "block7_sepconv3",
                "inbound_nodes": [
                    [
                        [
                            "block7_sepconv3_act",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "block7_sepconv3_bn",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "block7_sepconv3_bn",
                "inbound_nodes": [
                    [
                        [
                            "block7_sepconv3",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Merge",
                "config": {
                    "dot_axes": -1,
                    "name": "merge_6",
                    "mode": "sum",
                    "output_shape": null,
                    "output_shape_type": "raw",
                    "concat_axis": -1,
                    "mode_type": "raw"
                },
                "name": "merge_6",
                "inbound_nodes": [
                    [
                        [
                            "block7_sepconv3_bn",
                            0,
                            0
                        ],
                        [
                            "merge_5",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Activation",
                "config": {
                    "activation": "relu",
                    "trainable": true,
                    "name": "block8_sepconv1_act"
                },
                "name": "block8_sepconv1_act",
                "inbound_nodes": [
                    [
                        [
                            "merge_6",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "SeparableConvolution2D",
                "config": {
                    "b_constraint": null,
                    "depth_multiplier": 1,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        1,
                        1
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 3,
                    "pointwise_constraint": null,
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null,
                    "pointwise_regularizer": null,
                    "nb_filter": 728,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 3,
                    "name": "block8_sepconv1",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null
                },
                "name": "block8_sepconv1",
                "inbound_nodes": [
                    [
                        [
                            "block8_sepconv1_act",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "block8_sepconv1_bn",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "block8_sepconv1_bn",
                "inbound_nodes": [
                    [
                        [
                            "block8_sepconv1",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Activation",
                "config": {
                    "activation": "relu",
                    "trainable": true,
                    "name": "block8_sepconv2_act"
                },
                "name": "block8_sepconv2_act",
                "inbound_nodes": [
                    [
                        [
                            "block8_sepconv1_bn",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "SeparableConvolution2D",
                "config": {
                    "b_constraint": null,
                    "depth_multiplier": 1,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        1,
                        1
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 3,
                    "pointwise_constraint": null,
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null,
                    "pointwise_regularizer": null,
                    "nb_filter": 728,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 3,
                    "name": "block8_sepconv2",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null
                },
                "name": "block8_sepconv2",
                "inbound_nodes": [
                    [
                        [
                            "block8_sepconv2_act",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "block8_sepconv2_bn",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "block8_sepconv2_bn",
                "inbound_nodes": [
                    [
                        [
                            "block8_sepconv2",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Activation",
                "config": {
                    "activation": "relu",
                    "trainable": true,
                    "name": "block8_sepconv3_act"
                },
                "name": "block8_sepconv3_act",
                "inbound_nodes": [
                    [
                        [
                            "block8_sepconv2_bn",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "SeparableConvolution2D",
                "config": {
                    "b_constraint": null,
                    "depth_multiplier": 1,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        1,
                        1
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 3,
                    "pointwise_constraint": null,
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null,
                    "pointwise_regularizer": null,
                    "nb_filter": 728,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 3,
                    "name": "block8_sepconv3",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null
                },
                "name": "block8_sepconv3",
                "inbound_nodes": [
                    [
                        [
                            "block8_sepconv3_act",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "block8_sepconv3_bn",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "block8_sepconv3_bn",
                "inbound_nodes": [
                    [
                        [
                            "block8_sepconv3",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Merge",
                "config": {
                    "dot_axes": -1,
                    "name": "merge_7",
                    "mode": "sum",
                    "output_shape": null,
                    "output_shape_type": "raw",
                    "concat_axis": -1,
                    "mode_type": "raw"
                },
                "name": "merge_7",
                "inbound_nodes": [
                    [
                        [
                            "block8_sepconv3_bn",
                            0,
                            0
                        ],
                        [
                            "merge_6",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Activation",
                "config": {
                    "activation": "relu",
                    "trainable": true,
                    "name": "block9_sepconv1_act"
                },
                "name": "block9_sepconv1_act",
                "inbound_nodes": [
                    [
                        [
                            "merge_7",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "SeparableConvolution2D",
                "config": {
                    "b_constraint": null,
                    "depth_multiplier": 1,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        1,
                        1
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 3,
                    "pointwise_constraint": null,
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null,
                    "pointwise_regularizer": null,
                    "nb_filter": 728,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 3,
                    "name": "block9_sepconv1",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null
                },
                "name": "block9_sepconv1",
                "inbound_nodes": [
                    [
                        [
                            "block9_sepconv1_act",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "block9_sepconv1_bn",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "block9_sepconv1_bn",
                "inbound_nodes": [
                    [
                        [
                            "block9_sepconv1",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Activation",
                "config": {
                    "activation": "relu",
                    "trainable": true,
                    "name": "block9_sepconv2_act"
                },
                "name": "block9_sepconv2_act",
                "inbound_nodes": [
                    [
                        [
                            "block9_sepconv1_bn",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "SeparableConvolution2D",
                "config": {
                    "b_constraint": null,
                    "depth_multiplier": 1,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        1,
                        1
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 3,
                    "pointwise_constraint": null,
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null,
                    "pointwise_regularizer": null,
                    "nb_filter": 728,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 3,
                    "name": "block9_sepconv2",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null
                },
                "name": "block9_sepconv2",
                "inbound_nodes": [
                    [
                        [
                            "block9_sepconv2_act",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "block9_sepconv2_bn",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "block9_sepconv2_bn",
                "inbound_nodes": [
                    [
                        [
                            "block9_sepconv2",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Activation",
                "config": {
                    "activation": "relu",
                    "trainable": true,
                    "name": "block9_sepconv3_act"
                },
                "name": "block9_sepconv3_act",
                "inbound_nodes": [
                    [
                        [
                            "block9_sepconv2_bn",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "SeparableConvolution2D",
                "config": {
                    "b_constraint": null,
                    "depth_multiplier": 1,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        1,
                        1
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 3,
                    "pointwise_constraint": null,
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null,
                    "pointwise_regularizer": null,
                    "nb_filter": 728,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 3,
                    "name": "block9_sepconv3",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null
                },
                "name": "block9_sepconv3",
                "inbound_nodes": [
                    [
                        [
                            "block9_sepconv3_act",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "block9_sepconv3_bn",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "block9_sepconv3_bn",
                "inbound_nodes": [
                    [
                        [
                            "block9_sepconv3",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Merge",
                "config": {
                    "dot_axes": -1,
                    "name": "merge_8",
                    "mode": "sum",
                    "output_shape": null,
                    "output_shape_type": "raw",
                    "concat_axis": -1,
                    "mode_type": "raw"
                },
                "name": "merge_8",
                "inbound_nodes": [
                    [
                        [
                            "block9_sepconv3_bn",
                            0,
                            0
                        ],
                        [
                            "merge_7",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Activation",
                "config": {
                    "activation": "relu",
                    "trainable": true,
                    "name": "block10_sepconv1_act"
                },
                "name": "block10_sepconv1_act",
                "inbound_nodes": [
                    [
                        [
                            "merge_8",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "SeparableConvolution2D",
                "config": {
                    "b_constraint": null,
                    "depth_multiplier": 1,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        1,
                        1
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 3,
                    "pointwise_constraint": null,
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null,
                    "pointwise_regularizer": null,
                    "nb_filter": 728,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 3,
                    "name": "block10_sepconv1",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null
                },
                "name": "block10_sepconv1",
                "inbound_nodes": [
                    [
                        [
                            "block10_sepconv1_act",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "block10_sepconv1_bn",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "block10_sepconv1_bn",
                "inbound_nodes": [
                    [
                        [
                            "block10_sepconv1",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Activation",
                "config": {
                    "activation": "relu",
                    "trainable": true,
                    "name": "block10_sepconv2_act"
                },
                "name": "block10_sepconv2_act",
                "inbound_nodes": [
                    [
                        [
                            "block10_sepconv1_bn",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "SeparableConvolution2D",
                "config": {
                    "b_constraint": null,
                    "depth_multiplier": 1,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        1,
                        1
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 3,
                    "pointwise_constraint": null,
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null,
                    "pointwise_regularizer": null,
                    "nb_filter": 728,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 3,
                    "name": "block10_sepconv2",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null
                },
                "name": "block10_sepconv2",
                "inbound_nodes": [
                    [
                        [
                            "block10_sepconv2_act",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "block10_sepconv2_bn",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "block10_sepconv2_bn",
                "inbound_nodes": [
                    [
                        [
                            "block10_sepconv2",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Activation",
                "config": {
                    "activation": "relu",
                    "trainable": true,
                    "name": "block10_sepconv3_act"
                },
                "name": "block10_sepconv3_act",
                "inbound_nodes": [
                    [
                        [
                            "block10_sepconv2_bn",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "SeparableConvolution2D",
                "config": {
                    "b_constraint": null,
                    "depth_multiplier": 1,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        1,
                        1
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 3,
                    "pointwise_constraint": null,
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null,
                    "pointwise_regularizer": null,
                    "nb_filter": 728,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 3,
                    "name": "block10_sepconv3",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null
                },
                "name": "block10_sepconv3",
                "inbound_nodes": [
                    [
                        [
                            "block10_sepconv3_act",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "block10_sepconv3_bn",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "block10_sepconv3_bn",
                "inbound_nodes": [
                    [
                        [
                            "block10_sepconv3",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Merge",
                "config": {
                    "dot_axes": -1,
                    "name": "merge_9",
                    "mode": "sum",
                    "output_shape": null,
                    "output_shape_type": "raw",
                    "concat_axis": -1,
                    "mode_type": "raw"
                },
                "name": "merge_9",
                "inbound_nodes": [
                    [
                        [
                            "block10_sepconv3_bn",
                            0,
                            0
                        ],
                        [
                            "merge_8",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Activation",
                "config": {
                    "activation": "relu",
                    "trainable": true,
                    "name": "block11_sepconv1_act"
                },
                "name": "block11_sepconv1_act",
                "inbound_nodes": [
                    [
                        [
                            "merge_9",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "SeparableConvolution2D",
                "config": {
                    "b_constraint": null,
                    "depth_multiplier": 1,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        1,
                        1
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 3,
                    "pointwise_constraint": null,
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null,
                    "pointwise_regularizer": null,
                    "nb_filter": 728,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 3,
                    "name": "block11_sepconv1",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null
                },
                "name": "block11_sepconv1",
                "inbound_nodes": [
                    [
                        [
                            "block11_sepconv1_act",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "block11_sepconv1_bn",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "block11_sepconv1_bn",
                "inbound_nodes": [
                    [
                        [
                            "block11_sepconv1",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Activation",
                "config": {
                    "activation": "relu",
                    "trainable": true,
                    "name": "block11_sepconv2_act"
                },
                "name": "block11_sepconv2_act",
                "inbound_nodes": [
                    [
                        [
                            "block11_sepconv1_bn",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "SeparableConvolution2D",
                "config": {
                    "b_constraint": null,
                    "depth_multiplier": 1,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        1,
                        1
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 3,
                    "pointwise_constraint": null,
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null,
                    "pointwise_regularizer": null,
                    "nb_filter": 728,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 3,
                    "name": "block11_sepconv2",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null
                },
                "name": "block11_sepconv2",
                "inbound_nodes": [
                    [
                        [
                            "block11_sepconv2_act",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "block11_sepconv2_bn",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "block11_sepconv2_bn",
                "inbound_nodes": [
                    [
                        [
                            "block11_sepconv2",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Activation",
                "config": {
                    "activation": "relu",
                    "trainable": true,
                    "name": "block11_sepconv3_act"
                },
                "name": "block11_sepconv3_act",
                "inbound_nodes": [
                    [
                        [
                            "block11_sepconv2_bn",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "SeparableConvolution2D",
                "config": {
                    "b_constraint": null,
                    "depth_multiplier": 1,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        1,
                        1
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 3,
                    "pointwise_constraint": null,
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null,
                    "pointwise_regularizer": null,
                    "nb_filter": 728,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 3,
                    "name": "block11_sepconv3",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null
                },
                "name": "block11_sepconv3",
                "inbound_nodes": [
                    [
                        [
                            "block11_sepconv3_act",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "block11_sepconv3_bn",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "block11_sepconv3_bn",
                "inbound_nodes": [
                    [
                        [
                            "block11_sepconv3",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Merge",
                "config": {
                    "dot_axes": -1,
                    "name": "merge_10",
                    "mode": "sum",
                    "output_shape": null,
                    "output_shape_type": "raw",
                    "concat_axis": -1,
                    "mode_type": "raw"
                },
                "name": "merge_10",
                "inbound_nodes": [
                    [
                        [
                            "block11_sepconv3_bn",
                            0,
                            0
                        ],
                        [
                            "merge_9",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Activation",
                "config": {
                    "activation": "relu",
                    "trainable": true,
                    "name": "block12_sepconv1_act"
                },
                "name": "block12_sepconv1_act",
                "inbound_nodes": [
                    [
                        [
                            "merge_10",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "SeparableConvolution2D",
                "config": {
                    "b_constraint": null,
                    "depth_multiplier": 1,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        1,
                        1
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 3,
                    "pointwise_constraint": null,
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null,
                    "pointwise_regularizer": null,
                    "nb_filter": 728,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 3,
                    "name": "block12_sepconv1",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null
                },
                "name": "block12_sepconv1",
                "inbound_nodes": [
                    [
                        [
                            "block12_sepconv1_act",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "block12_sepconv1_bn",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "block12_sepconv1_bn",
                "inbound_nodes": [
                    [
                        [
                            "block12_sepconv1",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Activation",
                "config": {
                    "activation": "relu",
                    "trainable": true,
                    "name": "block12_sepconv2_act"
                },
                "name": "block12_sepconv2_act",
                "inbound_nodes": [
                    [
                        [
                            "block12_sepconv1_bn",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "SeparableConvolution2D",
                "config": {
                    "b_constraint": null,
                    "depth_multiplier": 1,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        1,
                        1
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 3,
                    "pointwise_constraint": null,
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null,
                    "pointwise_regularizer": null,
                    "nb_filter": 728,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 3,
                    "name": "block12_sepconv2",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null
                },
                "name": "block12_sepconv2",
                "inbound_nodes": [
                    [
                        [
                            "block12_sepconv2_act",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "block12_sepconv2_bn",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "block12_sepconv2_bn",
                "inbound_nodes": [
                    [
                        [
                            "block12_sepconv2",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Activation",
                "config": {
                    "activation": "relu",
                    "trainable": true,
                    "name": "block12_sepconv3_act"
                },
                "name": "block12_sepconv3_act",
                "inbound_nodes": [
                    [
                        [
                            "block12_sepconv2_bn",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "SeparableConvolution2D",
                "config": {
                    "b_constraint": null,
                    "depth_multiplier": 1,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        1,
                        1
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 3,
                    "pointwise_constraint": null,
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null,
                    "pointwise_regularizer": null,
                    "nb_filter": 728,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 3,
                    "name": "block12_sepconv3",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null
                },
                "name": "block12_sepconv3",
                "inbound_nodes": [
                    [
                        [
                            "block12_sepconv3_act",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "block12_sepconv3_bn",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "block12_sepconv3_bn",
                "inbound_nodes": [
                    [
                        [
                            "block12_sepconv3",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Merge",
                "config": {
                    "dot_axes": -1,
                    "name": "merge_11",
                    "mode": "sum",
                    "output_shape": null,
                    "output_shape_type": "raw",
                    "concat_axis": -1,
                    "mode_type": "raw"
                },
                "name": "merge_11",
                "inbound_nodes": [
                    [
                        [
                            "block12_sepconv3_bn",
                            0,
                            0
                        ],
                        [
                            "merge_10",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Activation",
                "config": {
                    "activation": "relu",
                    "trainable": true,
                    "name": "block13_sepconv1_act"
                },
                "name": "block13_sepconv1_act",
                "inbound_nodes": [
                    [
                        [
                            "merge_11",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "SeparableConvolution2D",
                "config": {
                    "b_constraint": null,
                    "depth_multiplier": 1,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        1,
                        1
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 3,
                    "pointwise_constraint": null,
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null,
                    "pointwise_regularizer": null,
                    "nb_filter": 728,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 3,
                    "name": "block13_sepconv1",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null
                },
                "name": "block13_sepconv1",
                "inbound_nodes": [
                    [
                        [
                            "block13_sepconv1_act",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "block13_sepconv1_bn",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "block13_sepconv1_bn",
                "inbound_nodes": [
                    [
                        [
                            "block13_sepconv1",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Activation",
                "config": {
                    "activation": "relu",
                    "trainable": true,
                    "name": "block13_sepconv2_act"
                },
                "name": "block13_sepconv2_act",
                "inbound_nodes": [
                    [
                        [
                            "block13_sepconv1_bn",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "SeparableConvolution2D",
                "config": {
                    "b_constraint": null,
                    "depth_multiplier": 1,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        1,
                        1
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 3,
                    "pointwise_constraint": null,
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null,
                    "pointwise_regularizer": null,
                    "nb_filter": 1024,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 3,
                    "name": "block13_sepconv2",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null
                },
                "name": "block13_sepconv2",
                "inbound_nodes": [
                    [
                        [
                            "block13_sepconv2_act",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "block13_sepconv2_bn",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "block13_sepconv2_bn",
                "inbound_nodes": [
                    [
                        [
                            "block13_sepconv2",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Convolution2D",
                "config": {
                    "W_constraint": null,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        2,
                        2
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 1,
                    "W_regularizer": null,
                    "nb_filter": 1024,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 1,
                    "name": "convolution2d_4",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null,
                    "b_constraint": null
                },
                "name": "convolution2d_4",
                "inbound_nodes": [
                    [
                        [
                            "merge_11",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "MaxPooling2D",
                "config": {
                    "trainable": true,
                    "pool_size": [
                        3,
                        3
                    ],
                    "dim_ordering": "tf",
                    "border_mode": "same",
                    "name": "block13_pool",
                    "strides": [
                        2,
                        2
                    ]
                },
                "name": "block13_pool",
                "inbound_nodes": [
                    [
                        [
                            "block13_sepconv2_bn",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "batchnormalization_4",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "batchnormalization_4",
                "inbound_nodes": [
                    [
                        [
                            "convolution2d_4",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Merge",
                "config": {
                    "dot_axes": -1,
                    "name": "merge_12",
                    "mode": "sum",
                    "output_shape": null,
                    "output_shape_type": "raw",
                    "concat_axis": -1,
                    "mode_type": "raw"
                },
                "name": "merge_12",
                "inbound_nodes": [
                    [
                        [
                            "block13_pool",
                            0,
                            0
                        ],
                        [
                            "batchnormalization_4",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "SeparableConvolution2D",
                "config": {
                    "b_constraint": null,
                    "depth_multiplier": 1,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        1,
                        1
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 3,
                    "pointwise_constraint": null,
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null,
                    "pointwise_regularizer": null,
                    "nb_filter": 1536,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 3,
                    "name": "block14_sepconv1",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null
                },
                "name": "block14_sepconv1",
                "inbound_nodes": [
                    [
                        [
                            "merge_12",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "block14_sepconv1_bn",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "block14_sepconv1_bn",
                "inbound_nodes": [
                    [
                        [
                            "block14_sepconv1",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Activation",
                "config": {
                    "activation": "relu",
                    "trainable": true,
                    "name": "block14_sepconv1_act"
                },
                "name": "block14_sepconv1_act",
                "inbound_nodes": [
                    [
                        [
                            "block14_sepconv1_bn",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "SeparableConvolution2D",
                "config": {
                    "b_constraint": null,
                    "depth_multiplier": 1,
                    "bias": false,
                    "init": "glorot_uniform",
                    "subsample": [
                        1,
                        1
                    ],
                    "dim_ordering": "tf",
                    "nb_row": 3,
                    "pointwise_constraint": null,
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null,
                    "pointwise_regularizer": null,
                    "nb_filter": 2048,
                    "activation": "linear",
                    "trainable": true,
                    "nb_col": 3,
                    "name": "block14_sepconv2",
                    "border_mode": "same",
                    "b_regularizer": null,
                    "activity_regularizer": null
                },
                "name": "block14_sepconv2",
                "inbound_nodes": [
                    [
                        [
                            "block14_sepconv1_act",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "BatchNormalization",
                "config": {
                    "beta_regularizer": null,
                    "trainable": true,
                    "epsilon": 0.00001,
                    "gamma_regularizer": null,
                    "name": "block14_sepconv2_bn",
                    "axis": -1,
                    "mode": 0,
                    "momentum": 0.99
                },
                "name": "block14_sepconv2_bn",
                "inbound_nodes": [
                    [
                        [
                            "block14_sepconv2",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Activation",
                "config": {
                    "activation": "relu",
                    "trainable": true,
                    "name": "block14_sepconv2_act"
                },
                "name": "block14_sepconv2_act",
                "inbound_nodes": [
                    [
                        [
                            "block14_sepconv2_bn",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "GlobalAveragePooling2D",
                "config": {
                    "trainable": true,
                    "name": "avg_pool",
                    "dim_ordering": "tf"
                },
                "name": "avg_pool",
                "inbound_nodes": [
                    [
                        [
                            "block14_sepconv2_act",
                            0,
                            0
                        ]
                    ]
                ]
            },
            {
                "class_name": "Dense",
                "config": {
                    "b_constraint": null,
                    "bias": true,
                    "init": "glorot_uniform",
                    "output_dim": 1000,
                    "input_dim": null,
                    "W_regularizer": null,
                    "activity_regularizer": null,
                    "W_constraint": null,
                    "trainable": true,
                    "name": "predictions",
                    "b_regularizer": null,
                    "activation": "softmax"
                },
                "name": "predictions",
                "inbound_nodes": [
                    [
                        [
                            "avg_pool",
                            0,
                            0
                        ]
                    ]
                ]
            }
        ],
        "name": "model_1",
        "output_layers": [
            [
                "predictions",
                0,
                0
            ]
        ]
    },
    "keras_version": "1.1.0"
}