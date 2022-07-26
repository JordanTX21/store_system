<?php
$dominio = Request::root();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Boleta de venta</title>
    <style>
        table{
            border-collapse: collapse;
            width: 100%;
        }

        .table th, .table td{
            border: 1px solid #000;
            padding: 5px;
        }
        .text-left{
            text-align: left;
        }
        .text-right{
            text-align: right;
        }
        .text-center{
            text-align: center;
        }
    </style>
</head>

<body>
    <!--<pre>
        <?php print_r($data); ?>
    </pre>-->
    <table style="width:100%">
        <tbody>
            <tr>
                <td>
                    <!--<img src="{ {$dominio}}/uploads/img/logo.png" style="width:100px;" alt="logo">-->
                </td>
                <td>
                    <h1 class="text-right">Boleta de venta</h1>
                </td>
            </tr>
        </tbody>
    </table>
    <table >
        <tbody>
            <tr>
                <td>Señor (es):</td>
                <td>.........................................</td>
                <td>DNI: {{ $data['proforma']['client_document'] }}</td>
                <td></td>
            </tr>
            <tr>
                <td>Direccion:</td>
                <td>.........................................</td>
                <td></td>
                <td>
                    <table class="table" >
                        <tbody>
                            <tr>
                                <th>Fecha:</th>
                                <th>Nro:</th>
                            </tr>
                            <tr>
                                <td>{{ explode(' ', $data['proforma']['created_at'])[0] }}</td>
                                <td>{{ str_pad($data['proforma']['id'], 10, '0', STR_PAD_LEFT) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <br>
    <br>
    <br>
    <table class="table" >
        <thead>
            <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Precio U.</th>
                <th>Cantidad</th>
                <th>Importe</th>
            </tr>
        </thead>
        <tbody>
            <?php 
            $total_price = 0;
                foreach ($data['products'] as $keyp => $product) : ?>
            <?php
            $total = floatval($product['product']['price']) * floatval($product['quantity']);
            $total_price += $total;
            ?>
            <tr>
                <td><?php echo $keyp + 1; ?></td>
                <td class="text-center"><?php echo $product['product']['name']; ?></td>
                <td class="text-center"><?php echo number_format($product['product']['price'], 2); ?></td>
                <td class="text-center"><?php echo $product['quantity']; ?></td>
                <td class="text-center"><?php echo number_format($total, 2); ?></td>
            </tr>
            <?php endforeach; ?>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td class="text-right">Total:</td>
                <td class="text-center"><?php echo number_format($total_price, 2); ?></td>
            </tr>
        </tbody>
    </table>
</body>

</html>
