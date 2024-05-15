"""empty message

Revision ID: bfd5a0027260
Revises: 011765eb75f4
Create Date: 2024-05-15 16:35:39.994611

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'bfd5a0027260'
down_revision = '011765eb75f4'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('room', schema=None) as batch_op:
        batch_op.alter_column('room_size',
               existing_type=sa.INTEGER(),
               nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('room', schema=None) as batch_op:
        batch_op.alter_column('room_size',
               existing_type=sa.INTEGER(),
               nullable=True)

    # ### end Alembic commands ###
