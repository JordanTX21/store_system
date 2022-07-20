<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProformaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('proforma', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('client_document');
            $table->index('client_document');
            $table->bigInteger('create_user_id')->unsigned()->nullable();
            $table->foreign('create_user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
            $table->bigInteger('update_user_id')->unsigned()->nullable();
            $table->foreign('update_user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
            $table->boolean('status')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('proforma');
    }
}
